import Image from "next/image";
import { useEffect, useState } from "react";
import { images } from "./localUtils/posterList";
const len = images.length;

export default function ImageSlider() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIndex(prev => (prev + 1) % len);
      return () => {
        clearTimeout(timer);
      }
    }, 2500);
  }, [index]);

  return (
    <div className="w-full h-[50vh] bg-red-600">
      <Image src={images[index]} alt="" height={1000} width={1000} className="w-full h-full bg-cover" />
    </div>
  )
}
