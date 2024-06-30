import PhotoDisplay from "@/components/PhotoDisplay";

export default async function Home() {
  const res = await fetch("http://localhost:4000/images");
  const images = await res.json();

  return (
    <main>
      <section className="flex flex-col justify-center items-center gap-8">
        {images?.map((image: { id: number; url: string; title: string }) => (
          <PhotoDisplay key={image?.id} {...image} />
        ))}
      </section>
    </main>
  );
}
