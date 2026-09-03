import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "@phosphor-icons/react/dist/ssr";
import { Reveal } from "@/components/reveal";
import { CtaBand } from "@/components/cta-band";
import { posts, postsByDate, getPost, formatPostDate } from "@/lib/blog";

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.dek,
    openGraph: {
      type: "article",
      title: post.title,
      description: post.dek,
      publishedTime: post.date,
    },
  };
}

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const i = postsByDate.findIndex((p) => p.slug === post.slug);
  const newer = postsByDate[i - 1];
  const older = postsByDate[i + 1];

  return (
    <>
      <article>
        <header className="border-b border-[var(--hairline)] bg-[var(--surface-2)]">
          <div className="shell max-w-4xl py-14 md:py-20">
            <Link
              href="/blog"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-[var(--text-muted)] transition-colors hover:text-[var(--text-strong)]"
            >
              <ArrowLeft size={15} weight="bold" />
              Newsletter
            </Link>
            <h1 className="mt-6 font-display text-3xl font-semibold leading-[1.1] md:text-5xl">
              {post.title}
            </h1>
            <p className="mt-5 text-sm text-[var(--text-muted)]">
              <time dateTime={post.date}>{formatPostDate(post.date)}</time>
              {" · Phillips Clinic"}
            </p>
          </div>
        </header>

        <div className="shell max-w-4xl py-14 md:py-20">
          {post.body.map((block, bi) => {
            if (block.type === "h") {
              return (
                <h2
                  key={bi}
                  className="mt-12 font-display text-xl font-semibold text-[var(--text-strong)] first:mt-0 md:text-2xl"
                >
                  {block.text}
                </h2>
              );
            }
            if (block.type === "ul") {
              return (
                <ul key={bi} className="mt-5 space-y-3">
                  {block.items.map((item) => (
                    <li key={item} className="flex gap-3">
                      <span
                        aria-hidden
                        className="mt-[0.55rem] h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--accent)]"
                      />
                      <span className="prose-body leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              );
            }
            return (
              <p key={bi} className="prose-body mt-5 leading-relaxed first:mt-0">
                {block.text}
              </p>
            );
          })}

          {post.source && (
            <p className="mt-12 border-t border-[var(--hairline)] pt-6 text-sm text-[var(--text-muted)]">
              Guidance summarised from{" "}
              <a
                href={post.source.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 font-medium text-[var(--accent)] hover:underline"
              >
                {post.source.label}
                <ArrowUpRight size={13} weight="bold" />
              </a>
              .
            </p>
          )}

          <p className="mt-8 rounded-[var(--radius-surface)] bg-[var(--color-brand-50)] p-6 text-sm leading-relaxed text-[var(--text-muted)]">
            This is general health information, not medical advice for your
            situation. If any of it applies to you, bring it to your next visit
            or call the front desk.
          </p>
        </div>
      </article>

      {(newer || older) && (
        <nav
          aria-label="More posts"
          className="border-t border-[var(--hairline)]"
        >
          <div className="shell grid gap-px py-0 md:grid-cols-2">
            {[
              { post: older, label: "Older post", icon: "left" as const },
              { post: newer, label: "Newer post", icon: "right" as const },
            ]
              .filter((x) => x.post)
              .map(({ post: p, label, icon }) => (
                <Reveal key={p!.slug}>
                  <Link
                    href={`/blog/${p!.slug}`}
                    className={`group flex h-full flex-col py-10 ${
                      icon === "right" ? "md:items-end md:text-right" : ""
                    }`}
                  >
                    <span className="font-display text-xs font-bold uppercase tracking-wider text-[var(--accent)]">
                      {label}
                    </span>
                    <span className="mt-2 max-w-[34ch] font-display text-lg font-semibold text-[var(--text-strong)] transition-colors group-hover:text-[var(--accent)]">
                      {p!.title}
                    </span>
                    <span className="mt-3 text-[var(--accent)]">
                      {icon === "right" ? (
                        <ArrowRight size={16} weight="bold" />
                      ) : (
                        <ArrowLeft size={16} weight="bold" />
                      )}
                    </span>
                  </Link>
                </Reveal>
              ))}
          </div>
        </nav>
      )}

      <CtaBand
        heading="Due for a screening?"
        body="Most of what this post recommends is a single appointment. Book online, or call the front desk and describe what you are due for."
      />
    </>
  );
}
