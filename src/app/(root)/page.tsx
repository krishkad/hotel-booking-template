import Link from "next/link";

export default function Home() {
  return (
    <main className="w-full">
      ok
      <Link href={'/isadmin/dashboard'}>Dashboard</Link>
    </main>
  );
};
