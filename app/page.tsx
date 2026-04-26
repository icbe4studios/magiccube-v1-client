import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <Image
        src="/brandlogo.png"
        alt="Brand Logo"
        width={400}
        height={400}
        priority
        className="object-contain h-72 w-72 lg:h-96 lg:w-w96"
      />
    </div>
  );
}
