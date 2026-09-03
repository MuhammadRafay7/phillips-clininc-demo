"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { List, X, Phone, ShoppingBag, ShieldCheck, Sparkle, CalendarCheck } from "@phosphor-icons/react";
import { clinic } from "@/lib/clinic";
import { Wordmark } from "./wordmark";

const nav = [
  { href: "/services", label: "Services", badge: null },
  { href: "/team", label: "Our Team", badge: null },
  { href: "/anti-aging", label: "Compounding", badge: null },
  { href: "/weight-loss-trials", label: "Weight Loss", badge: null },
  { href: "/supplements", label: "Supplements", badge: null },
  { href: "/kits", label: "Kits", badge: "Rx" },
  { href: "/blog", label: "Newsletter", badge: null },
  { href: "/contact", label: "Contact", badge: null },
];

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      {/* Top trust ticker: what the clinic is, then how to reach it. */}
      <div className="bg-[var(--color-brand-950)] text-white text-xs py-2 px-4 border-b border-white/10 font-medium">
        <div className="shell flex items-center justify-between gap-4">
          <div className="flex items-center gap-2 overflow-hidden text-ellipsis whitespace-nowrap">
            <span className="inline-flex items-center gap-1 rounded-full bg-[var(--accent-bright)]/20 px-2 py-0.5 text-[11px] font-semibold text-[var(--color-accent-300)]">
              <Sparkle size={12} weight="fill" /> Family Practice Since 2005
            </span>
            <span className="hidden sm:inline text-slate-300">
              Family practice, wellness and on-site imaging in Las Vegas. Open six days a week.
            </span>
          </div>
          <div className="flex items-center gap-4 shrink-0 text-slate-300 text-xs">
            <span className="hidden md:inline-flex items-center gap-1.5">
              <ShieldCheck size={14} className="text-emerald-400" /> Same-Day Appointments & Walk-Ins
            </span>
            <a
              href={clinic.phoneHref}
              className="hover:text-white transition-colors flex items-center gap-1 text-[var(--accent-bright)] font-semibold"
            >
              <Phone size={13} weight="fill" />
              {clinic.phone}
            </a>
          </div>
        </div>
      </div>

      <header className="sticky top-0 z-40 border-b border-[var(--hairline)] bg-[var(--surface)]/95 backdrop-blur-md">
        <div className="shell flex h-[76px] items-center justify-between gap-4 xl:gap-6">
          <Link href="/" aria-label={`${clinic.name} home`} className="shrink-0 flex items-center gap-3">
            <Wordmark />
            <div className="hidden xl:flex flex-col border-l border-[var(--hairline)] pl-3">
              <span className="text-[10px] font-bold uppercase tracking-wider text-[var(--accent)]">
                Family Practice
              </span>
              <span className="text-xs text-[var(--text-muted)] font-medium">
                Wellness &amp; Anti-Aging
              </span>
            </div>
          </Link>

          <nav
            aria-label="Primary"
            className="hidden items-center gap-5 lg:flex xl:gap-6"
          >
            {nav.map((item) => {
              const active = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  className={`relative flex items-center gap-1.5 whitespace-nowrap py-1 text-sm font-medium transition-colors ${
                    active
                      ? "text-[var(--accent)] font-semibold"
                      : "text-[var(--text-body)] hover:text-[var(--text-strong)]"
                  }`}
                >
                  {item.label}
                  {item.badge && (
                    <span className="rounded bg-sky-100 text-sky-800 text-[10px] font-bold px-1.5 py-0.2 tracking-wide uppercase">
                      {item.badge}
                    </span>
                  )}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href={clinic.bookingHref}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary whitespace-nowrap py-2 px-4 text-xs shadow-sm sm:px-5 sm:text-sm"
            >
              <CalendarCheck size={16} weight="bold" />
              <span>Book a Visit</span>
            </a>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-controls="mobile-nav"
              aria-label={open ? "Close menu" : "Open menu"}
              className="grid h-10 w-10 place-items-center rounded-full border border-[var(--hairline)] text-[var(--text-strong)] lg:hidden"
            >
              {open ? <X size={20} /> : <List size={20} />}
            </button>
          </div>
        </div>

        {open && (
          <div
            id="mobile-nav"
            className="border-t border-[var(--hairline)] bg-[var(--surface)] lg:hidden"
          >
            <nav aria-label="Mobile" className="shell flex flex-col py-3 divide-y divide-[var(--hairline)]">
              {nav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="flex items-center justify-between py-3.5 font-display text-base font-medium text-[var(--text-strong)]"
                >
                  <span>{item.label}</span>
                  {item.badge && (
                    <span className="rounded bg-sky-100 text-sky-800 text-xs font-bold px-2 py-0.5">
                      {item.badge}
                    </span>
                  )}
                </Link>
              ))}
              <div className="flex flex-col gap-2.5 pt-4 pb-2">
                <a
                  href={clinic.bookingHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary justify-center"
                >
                  <CalendarCheck size={18} weight="bold" />
                  Book In-Clinic Visit
                </a>
                <Link href="/kits" className="btn btn-ghost justify-center">
                  <ShoppingBag size={18} weight="bold" />
                  Order Prescription Kits
                </Link>
                <a href={clinic.phoneHref} className="btn btn-ghost justify-center text-xs text-[var(--text-muted)]">
                  <Phone size={14} weight="fill" />
                  Call {clinic.phone}
                </a>
              </div>
            </nav>
          </div>
        )}
      </header>
    </>
  );
}
