import Link from "next/link";

export default function Layout({
  children,
}: {
  modal: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <>
      <div>{children}</div>
    </>
  );
}
