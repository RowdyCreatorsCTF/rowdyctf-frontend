import Image from "next/image";

type Props = {
  src: string;
  alt: string;
};

export default function ProfileAvatar({ src, alt }: Props) {
  return <Image src={src} alt={alt} width={42} height={42} />;
}
