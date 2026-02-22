import Image from "next/image";

interface WaveDividerProps {
  flip?: boolean;
}

export default function WaveDivider({ flip = false }: WaveDividerProps) {
  return (
    <div className={flip ? "rotate-180" : ""}>
      <Image
        src="/assets/BGWave.png"
        alt=""
        width={1440}
        height={80}
        className="w-full block"
        aria-hidden="true"
      />
    </div>
  );
}

export function WaveDividerTop() {
  return (
    <Image
      src="/assets/BGWave-top.png"
      alt=""
      width={1440}
      height={80}
      className="w-full block"
      aria-hidden="true"
    />
  );
}
