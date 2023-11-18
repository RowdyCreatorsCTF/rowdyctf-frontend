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
      className={"rounded-md p-1 text-black bg-blue-500"}
    >
      {title}
    </Link>
  );
}
