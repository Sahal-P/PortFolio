import Hero from "@/components/main/Hero";
import Nav from "@/components/main/Nav";

export default function Home() {
  return (
    <>
      <Nav />
      <main className="h-full w-[100vw]">
        <div className="flex flex-col gap-20">
          <Hero />
        </div>
      </main>
    </>
  );
}
