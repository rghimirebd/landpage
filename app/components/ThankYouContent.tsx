import Link from "next/link";
import Image from "next/image";
import { siteContent } from "../lib/site-content";

function getVimeoEmbedUrl(url: string) {
  if (!url) return "";

  try {
    const parsedUrl = new URL(url);
    const segments = parsedUrl.pathname.split("/").filter(Boolean);
    const videoId = segments[segments.length - 1];

    if (!videoId) return "";

    return `https://player.vimeo.com/video/${videoId}`;
  } catch {
    return "";
  }
}

export default function ThankYouContent() {
  const embedUrl = getVimeoEmbedUrl(siteContent.videoUrl);
  const hasVideo = Boolean(embedUrl);
  const hasWhatsapp = Boolean(siteContent.whatsappUrl);

  return (
    <main className="relative min-h-screen overflow-hidden px-4 py-10 text-brand-charcoal sm:px-6 lg:px-8">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(224,177,76,0.16),transparent_26%),radial-gradient(circle_at_85%_15%,rgba(40,40,40,0.08),transparent_20%),linear-gradient(180deg,#fcfaf6_0%,#f5efe5_52%,#f2eadf_100%)]" />

      <section className="relative mx-auto flex max-w-5xl flex-col gap-8 rounded-[2.2rem] border border-white/70 bg-white/80 p-6 shadow-[0_30px_90px_rgba(18,18,18,0.08)] backdrop-blur sm:p-8 lg:p-10">
        <div className="flex flex-col items-center text-center">
          <div className="mb-2 flex justify-center">
            <Image
              src="/rabindra-digital-logo.png"
              alt="Rabindra Digital logo"
              width={640}
              height={160}
              priority
              className="h-auto w-[200px] mix-blend-multiply sm:w-[250px] lg:w-[300px]"
            />
          </div>
          <span className="inline-flex rounded-full border border-brand-gold/30 bg-brand-gold/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-[#8b651b]">
            Next Step
          </span>
          <h1 className="mt-6 max-w-3xl font-display text-4xl leading-tight sm:text-5xl lg:text-6xl">
            {siteContent.thankYouHeading}
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-7 text-brand-charcoal/78 sm:text-lg">
            {siteContent.thankYouDescription}
          </p>
        </div>

        <div className="overflow-hidden rounded-[1.9rem] border border-brand-charcoal/8 bg-white/92 shadow-[0_24px_70px_rgba(18,18,18,0.08)]">
          {hasVideo ? (
            <div className="aspect-video">
              <iframe
                src={embedUrl}
                className="h-full w-full"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
                title="Consultation preparation video"
              />
            </div>
          ) : (
            <div className="flex aspect-video items-center justify-center px-6 text-center">
              <div className="max-w-xl space-y-4">
                <p className="text-xl font-semibold text-brand-charcoal">Vimeo video link pending</p>
                <p className="text-sm leading-7 text-brand-charcoal/72 sm:text-base">
                  Send me your Vimeo link and I&apos;ll drop the embedded video into this box immediately.
                </p>
              </div>
            </div>
          )}
        </div>

        <div className="flex flex-col items-center gap-4">
          {hasWhatsapp ? (
            <a
              href={siteContent.whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-14 items-center justify-center rounded-full bg-brand-gold px-8 py-4 text-base font-semibold text-brand-charcoal transition hover:-translate-y-0.5 hover:bg-brand-gold-soft"
            >
              Chat with me on WhatsApp
            </a>
          ) : (
            <div className="rounded-full border border-dashed border-brand-charcoal/15 bg-white/60 px-6 py-3 text-sm text-brand-charcoal/72">
              WhatsApp link pending. Send it and I&apos;ll connect this button.
            </div>
          )}

          <Link
            href="/"
            className="text-sm font-medium text-brand-charcoal/70 underline decoration-brand-charcoal/20 underline-offset-4 transition hover:text-brand-charcoal"
          >
            Back to the landing page
          </Link>
        </div>
      </section>
    </main>
  );
}
