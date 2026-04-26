import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <Image
        src="/brandlogo.jpeg"
        alt="Brand Logo"
        width={800}
        height={600}
        priority
        className="object-contain"
      />
    </div>
  );
}
