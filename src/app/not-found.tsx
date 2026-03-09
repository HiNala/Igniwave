import Link from "next/link";
import { buttonVariants } from "@/components/ui/Button";
import IgniwaveLogo from "@/components/icons/IgniwaveLogo";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-igni-cream flex flex-col items-center justify-center px-6 text-center">
      <Link href="/" aria-label="Igniwave home" className="mb-10 inline-flex">
        <IgniwaveLogo variant="full" color="dark" size="lg" />
      </Link>

      <p className="font-sans text-xs font-semibold uppercase tracking-widest text-igni-coral mb-4">
        404
      </p>

      <h1 className="font-display text-4xl md:text-5xl text-igni-forest leading-tight mb-4">
        Page not found
      </h1>

      <p className="font-sans text-igni-slate text-lg max-w-md leading-relaxed mb-10">
        The page you&apos;re looking for doesn&apos;t exist or may have moved.
      </p>

      <div className="flex flex-col sm:flex-row gap-3">
        <Link href="/" className={buttonVariants({ variant: "primary", size: "md" })}>
          Go home
        </Link>
        <Link href="/contact" className={buttonVariants({ variant: "outline", size: "md" })}>
          Contact us
        </Link>
      </div>
    </div>
  );
}
