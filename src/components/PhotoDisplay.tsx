import Image from "next/image";
import Link from "next/link";

type PhotoDisplayProps = {
  url: string;
  title: string;
  id: number;
};

export default function PhotoDisplay({ url, title, id }: PhotoDisplayProps) {
  return (
    <div className="px-4 py-8">
      <h2 className="text-3xl text-center pb-2">{title}</h2>
      <Link href={`/shop/${id}`}>
        <Image
          className="h-60 w-80 object-cover"
          src={url}
          alt={title}
          width={400}
          height={300}
        />
      </Link>
    </div>
  );
}
