"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { CaretLeft, CaretRight, Quotes } from "@phosphor-icons/react";

type Review = { name: string; body: string };

/** How long each review holds before the carousel advances. */
const ADVANCE_MS = 5000;

/**
 * The patient reviews, as a scroll-snap carousel. Replaces the standalone
 * /reviews page, so it carries every review rather than a slice of them.
 *
 * Native scroll does the work: the buttons and dots just drive scrollTo, so
 * touch swipe, trackpad and keyboard all behave without a gesture library,
 * and it degrades to a plain horizontal scroller if JS never runs.
 *
 * It advances on its own every ADVANCE_MS and wraps at the end, but yields to
 * the reader. Every reason to stop is temporary and self-clearing: pointer
 * over it, focus inside it, a recent manual move, the tab hidden, or the
 * carousel scrolled off screen. prefers-reduced-motion disables it outright.
 */
export function ReviewsCarousel({ reviews }: { reviews: readonly Review[] }) {
  const trackRef = useRef<HTMLUListElement>(null);
  const rootRef = useRef<HTMLDivElement>(null);

  const [active, setActive] = useState(0);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);

  const [reduceMotion, setReduceMotion] = useState(false);
  // Kept apart so clearing one reason cannot cancel another.
  const [hovered, setHovered] = useState(false);
  const [focused, setFocused] = useState(false);
  const [offscreen, setOffscreen] = useState(false);
  const [tabHidden, setTabHidden] = useState(false);

  /** Card pitch measured from the DOM, so it can't drift from the classes. */
  const pitchOf = (el: HTMLElement) => {
    const first = el.firstElementChild as HTMLElement | null;
    if (!first) return 0;
    const second = first.nextElementSibling as HTMLElement | null;
    return second ? second.offsetLeft - first.offsetLeft : first.offsetWidth;
  };

  const sync = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;
    const pitch = pitchOf(el);
    if (!pitch) return;
    setActive(Math.round(el.scrollLeft / pitch));
    setAtStart(el.scrollLeft <= 4);
    setAtEnd(el.scrollLeft >= el.scrollWidth - el.clientWidth - 4);
  }, []);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    sync();
    el.addEventListener("scroll", sync, { passive: true });
    window.addEventListener("resize", sync);
    return () => {
      el.removeEventListener("scroll", sync);
      window.removeEventListener("resize", sync);
    };
  }, [sync]);

  const scrollToCard = useCallback((index: number) => {
    const el = trackRef.current;
    if (!el) return;
    const card = el.children[index] as HTMLElement | undefined;
    if (card) el.scrollTo({ left: card.offsetLeft, behavior: "smooth" });
  }, []);

  const step = useCallback(
    (dir: -1 | 1) => scrollToCard(Math.min(Math.max(active + dir, 0), reviews.length - 1)),
    [active, reviews.length, scrollToCard],
  );

  /**
   * A manual move holds the timer for one extra beat, so the carousel does
   * not advance out from under someone who just tapped an arrow. Hover and
   * focus already cover mouse and keyboard; this is mainly for touch, where
   * there is no hover to pause on.
   */
  const [nudged, setNudged] = useState(false);
  useEffect(() => {
    if (!nudged) return;
    const id = window.setTimeout(() => setNudged(false), ADVANCE_MS * 2);
    return () => window.clearTimeout(id);
  }, [nudged]);

  const take = useCallback((run: () => void) => {
    setNudged(true);
    run();
  }, []);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const apply = () => setReduceMotion(mq.matches);
    apply();
    mq.addEventListener("change", apply);
    return () => mq.removeEventListener("change", apply);
  }, []);

  useEffect(() => {
    const onVisibility = () => setTabHidden(document.hidden);
    onVisibility();
    document.addEventListener("visibilitychange", onVisibility);

    const root = rootRef.current;
    const io = root
      ? new IntersectionObserver(([e]) => setOffscreen(!e.isIntersecting), { threshold: 0.2 })
      : null;
    if (root && io) io.observe(root);

    return () => {
      document.removeEventListener("visibilitychange", onVisibility);
      io?.disconnect();
    };
  }, []);

  const held = hovered || focused || offscreen || tabHidden || nudged;
  const autoAdvancing = !held && !reduceMotion && reviews.length > 1;

  useEffect(() => {
    if (!autoAdvancing) return;
    const id = window.setInterval(() => {
      const el = trackRef.current;
      if (!el) return;
      // Index is read off the DOM each tick, so it is never a stale closure.
      const pitch = pitchOf(el);
      if (!pitch) return;
      const last = el.scrollLeft >= el.scrollWidth - el.clientWidth - 4;
      scrollToCard(last ? 0 : Math.round(el.scrollLeft / pitch) + 1);
    }, ADVANCE_MS);
    return () => window.clearInterval(id);
  }, [autoAdvancing, scrollToCard]);

  return (
    <div
      ref={rootRef}
      className="mt-12"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onFocusCapture={() => setFocused(true)}
      onBlurCapture={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget as Node | null)) setFocused(false);
      }}
    >
      <ul
        ref={trackRef}
        tabIndex={0}
        aria-label="Patient reviews"
        aria-live={autoAdvancing ? "off" : "polite"}
        // A drag on the track counts as a manual move; the arrows and dots
        // below flag it themselves via take().
        onPointerDown={() => setNudged(true)}
        onKeyDown={(e) => {
          if (e.key === "ArrowRight") { e.preventDefault(); take(() => step(1)); }
          if (e.key === "ArrowLeft") { e.preventDefault(); take(() => step(-1)); }
        }}
        className="flex snap-x snap-mandatory gap-6 overflow-x-auto scroll-smooth pb-2 [scrollbar-width:none] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--accent)] [&::-webkit-scrollbar]:hidden"
      >
        {reviews.map((r) => (
          <li
            key={r.name}
            className="flex w-[85%] shrink-0 snap-start flex-col rounded-2xl border border-[var(--hairline)] bg-white p-8 shadow-sm sm:w-[calc((100%-1.5rem)/2)] lg:w-[calc((100%-3rem)/3)]"
          >
            <Quotes
              size={28}
              weight="fill"
              className="shrink-0 text-[var(--color-brand-200)]"
              aria-hidden
            />
            <blockquote className="mt-4 flex-1 text-[0.95rem] leading-relaxed text-[var(--text-strong)]">
              {r.body}
            </blockquote>
            <p className="mt-6 border-t border-[var(--hairline)] pt-4 text-xs font-semibold uppercase tracking-wider text-[var(--text-muted)]">
              {r.name}, patient
            </p>
          </li>
        ))}
      </ul>

      <div className="mt-8 flex items-center justify-between gap-6">
        <div className="flex gap-2" role="tablist" aria-label="Choose a review">
          {reviews.map((r, i) => (
            <button
              key={r.name}
              type="button"
              role="tab"
              aria-selected={i === active}
              aria-label={`Review ${i + 1} of ${reviews.length}`}
              onClick={() => take(() => scrollToCard(i))}
              className={`h-2 rounded-full transition-all ${
                i === active
                  ? "w-6 bg-[var(--accent)]"
                  : "w-2 bg-[var(--color-brand-200)] hover:bg-[var(--color-brand-300)]"
              }`}
            />
          ))}
        </div>

        <div className="flex gap-2">
          {([["Previous", -1, CaretLeft, atStart], ["Next", 1, CaretRight, atEnd]] as const).map(
            ([label, dir, Icon, disabled]) => (
              <button
                key={label}
                type="button"
                onClick={() => take(() => step(dir))}
                disabled={disabled}
                aria-label={`${label} review`}
                className="grid h-10 w-10 place-items-center rounded-full border border-[var(--hairline)] bg-white text-[var(--text-strong)] transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)] disabled:cursor-not-allowed disabled:opacity-35 disabled:hover:border-[var(--hairline)] disabled:hover:text-[var(--text-strong)]"
              >
                <Icon size={17} weight="bold" />
              </button>
            ),
          )}
        </div>
      </div>
    </div>
  );
}
