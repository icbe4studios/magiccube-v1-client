import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="relative h-72 w-72 lg:h-96 lg:w-96">
        <Image
          src="/brandlogo-dark.png"
          alt="Brand Logo Dark"
          fill
          priority
          className="hidden dark:block object-contain"
        />

        <Image
          src="/brandlogo-light.png"
          alt="Brand Logo Light"
          fill
          priority
          className="block dark:hidden object-contain"
        />
      </div>
    </div>
  );
}
