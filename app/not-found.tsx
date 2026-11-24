import Link from "next/link";

export default function NotFound() {
  return (
    <main className="mx-auto max-w-xl px-4 py-28 text-[15px] leading-relaxed sm:px-6">
      <h1 className="font-medium">Page not found</h1>
      <p className="mt-2 text-muted">
        This page doesn&apos;t exist.{" "}
        <Link href="/" className="link">
          Go home
        </Link>
      </p>
    </main>
  );
}
