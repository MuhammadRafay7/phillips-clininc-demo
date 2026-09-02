"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { List, X, Phone, ShoppingBag, ShieldCheck, Sparkle } from "@phosphor-icons/react";
import { clinic } from "@/lib/clinic";
import { Wordmark } from "./wordmark";

const nav = [
  { href: "/kits", label: "Medication Kits", badge: "Rx" },
  { href: "/supplements", label: "Supplements", badge: null },
  { href: "/anti-aging", label: "Compounding & HRT", badge: null },
  { href: "/weight-loss-trials", label: "Weight Loss", badge: null },
  { href: "/services", label: "Clinic Care", badge: null },
  { href: "/team", label: "Medical Team", badge: null },
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
      {/* Top Pharmacy Trust & Free Shipping Ticker */}
      <div className="bg-[var(--color-brand-950)] text-white text-xs py-2 px-4 border-b border-white/10 font-medium">
        <div className="shell flex items-center justify-between gap-4">
          <div className="flex items-center gap-2 overflow-hidden text-ellipsis whitespace-nowrap">
            <span className="inline-flex items-center gap-1 rounded-full bg-[var(--accent-bright)]/20 px-2 py-0.5 text-[11px] font-semibold text-[var(--color-accent-300)]">
              <Sparkle size={12} weight="fill" /> US Licensed 503A Partner
            </span>
            <span className="hidden sm:inline text-slate-300">
              Prescription Emergency Kits dispensed in partnership with Partell Pharmacy.
            </span>
            <span className="sm:hidden text-slate-300">
              Emergency Kits & Telehealth Delivery
            </span>
          </div>
          <div className="flex items-center gap-4 shrink-0 text-slate-300 text-xs">
            <span className="hidden md:inline-flex items-center gap-1.5">
              <ShieldCheck size={14} className="text-emerald-400" /> Free 3–5 Day Tracked Delivery
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
        <div className="shell flex h-[76px] items-center justify-between gap-6">
          <Link href="/" aria-label={`${clinic.name} home`} className="shrink-0 flex items-center gap-3">
            <Wordmark />
            <div className="hidden xl:flex flex-col border-l border-[var(--hairline)] pl-3">
              <span className="text-[10px] font-bold uppercase tracking-wider text-[var(--accent)]">
                Pharmacy & Practice
              </span>
              <span className="text-xs text-[var(--text-muted)] font-medium">
                Clinical Delivery
              </span>
            </div>
          </Link>

          <nav
            aria-label="Primary"
            className="hidden items-center gap-6 lg:flex"
          >
            {nav.map((item) => {
              const active = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  className={`relative text-sm font-medium transition-colors py-1 flex items-center gap-1.5 ${
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
              href={clinic.patientPortalHref}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden lg:inline-flex text-xs font-semibold text-[var(--text-muted)] hover:text-[var(--text-strong)] transition-colors px-2 py-1.5 border border-transparent hover:border-[var(--hairline)] rounded-full"
            >
              Portal / Refill
            </a>
            <Link
              href="/kits"
              className="btn btn-primary text-xs sm:text-sm py-2 px-4 sm:px-5 shadow-sm"
            >
              <ShoppingBag size={16} weight="bold" />
              <span>Order Kits</span>
            </Link>
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
                <Link href="/kits" className="btn btn-primary justify-center">
                  <ShoppingBag size={18} weight="bold" />
                  Order Prescription Kits
                </Link>
                <a
                  href={clinic.bookingHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-ghost justify-center"
                >
                  Book In-Clinic Visit
                </a>
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
