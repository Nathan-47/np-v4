import Image from "next/image";
import logo from "@/public/np_logo.png";

export default function Loading() {
  return (
    <div className="flex items-center justify-center mt-65">
      <div className="blink">
        <Image
          className="m-auto mb-3"
          src={logo}
          alt="Logo loading"
          width={50}
          height={50}
          priority
        />
      </div>
    </div>
  );
}
