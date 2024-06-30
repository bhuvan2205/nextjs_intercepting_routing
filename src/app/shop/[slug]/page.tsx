import { notFound } from "next/navigation";
import PhotoDisplay from "@/components/PhotoDisplay";

export default async function page({
  params: { slug },
}: {
  params: { slug: string };
}) {
  const res = await fetch(`http://localhost:4000/images/${slug}`);

  if (!res.ok) {
    return notFound();
  }

  const image = await res.json();

  return (
    <div className="flex justify-center items-center">
      <PhotoDisplay {...image} />
    </div>
  );
}
