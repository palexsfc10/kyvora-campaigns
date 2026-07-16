import Link from "next/link";

export default function NotFound() {
  return (
    <main className="container-page flex min-h-dvh flex-col items-center justify-center py-20 text-center">
      <p className="eyebrow mb-4">404</p>
      <h1 className="text-3xl font-extrabold tracking-tight">Página não encontrada</h1>
      <p className="mt-3 max-w-md text-[var(--muted)]">
        Esta campanha ainda não existe ou o endereço está incorreto.
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex min-h-11 items-center rounded-full bg-[var(--brand)] px-5 text-sm font-semibold text-white"
      >
        Voltar ao início
      </Link>
    </main>
  );
}
