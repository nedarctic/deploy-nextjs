import Image from "next/image";

export default function Home() {
  return (
    <div>
      <p>Hello world</p>
      <Image src="/coverimage.png" alt="cover image" width={380} height={346} />
    </div>
  );
}
