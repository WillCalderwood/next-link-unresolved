import Link from "next/link";

export default async function Home() {
  return (
    <>
      <main>
        <Link href="/something">Click Me</Link>
      </main>
    </>
  );
}
