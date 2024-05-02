import { useState, useEffect } from "react";

export default function useProgressiveImg(lowQualitySrc: string, highQualitySrc: string) {
  const [src, setSrc] = useState<string>(lowQualitySrc);

  useEffect(() => {
    setSrc(lowQualitySrc);

    const img: HTMLImageElement = new Image();
    img.src = highQualitySrc;

    img.onload = () => {
      setSrc(highQualitySrc);
    }
  }, [lowQualitySrc, highQualitySrc]);

  const blur: boolean = src == lowQualitySrc

  return {src, blur}
}