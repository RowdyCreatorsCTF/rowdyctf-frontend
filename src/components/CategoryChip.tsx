import Link from "next/link";
export default function CategoryChip({
  id,
  title,
  color,
}: {
  id: string;
  title: string;
  color: string;
}) {
  return (
    <Link href={`/challenges?category=${id}`}>
      <div className={`bg-${color} rounded-md p-1 text-black`}>{title}</div>
    </Link>
  );
}
