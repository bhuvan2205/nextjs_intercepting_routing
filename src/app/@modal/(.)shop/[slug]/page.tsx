import { notFound } from "next/navigation";
import PhotoDisplay from "@/components/PhotoDisplay";
import Modal from "@/components/Modal";

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
    <Modal>
      <PhotoDisplay {...image} />
    </Modal>
  );
}
