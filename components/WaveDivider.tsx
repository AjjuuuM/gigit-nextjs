import Image from "next/image";

interface WaveDividerProps {
  flip?: boolean;
}

export default function WaveDivider({ flip = false }: WaveDividerProps) {
  return (
    <div className={`block m-0 p-0 leading-none overflow-hidden ${flip ? "rotate-180" : ""}`}>
      <Image
        src="/assets/BGWave.png"
        alt=""
        width={1440}
        height={80}
        className="block w-full h-auto m-0 p-0 align-top"
        aria-hidden="true"
      />
    </div>
  );
}

export function WaveDividerTop() {
  return (
    <div className="block m-0 p-0 leading-none overflow-hidden">
      <Image
        src="/assets/BGWave-top.png"
        alt=""
        width={1440}
        height={80}
        className="block w-full h-auto m-0 p-0 align-top"
        aria-hidden="true"
      />
    </div>
  );
}
