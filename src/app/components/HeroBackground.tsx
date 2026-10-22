import Image from "next/image";

export default function HeroBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0 select-none">
      <Image
        src="/hero.webp"
        alt=""
        fill
        priority
        quality={75}
        sizes="100vw"
        className="object-cover object-top select-none pointer-events-none"
      />
    </div>
  );
}
