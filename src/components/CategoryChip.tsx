import Link from "next/link";

export default function CategoryChip({
  id,
  title,
}: {
  id: string;
  title: string;
}) {
  return (
    <Link
      href={`/challenges?category=${id}`}
      className={"rounded-md bg-blue-700 p-1 text-black"}
    >
      {title}
    </Link>
  );
}
