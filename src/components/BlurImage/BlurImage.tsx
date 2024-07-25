import { CSSProperties, RefObject } from "react";
import useProgressiveImg from "../../Hooks/useProgressiveImg";

interface BlurImage {
  className: string;
  style: CSSProperties | undefined;
  reference: RefObject<HTMLImageElement> | undefined;
  loading: "eager" | "lazy";
  alt: string | undefined;
  handleClick: Function;
  lowQualityImg: string;
  highQualityImg: string;
}

export default function BlurImage(props: BlurImage) {
  const {src, blur} = useProgressiveImg(props.lowQualityImg, props.highQualityImg);

  const styles = {
    ...props.style,
    filter: blur ? "blur(10px)" : "none",
    transition: blur ? "none" : "filter 0.3s ease-out"
  }

  return (
    <img 
      className={props.className}
      style={styles}
      ref={props?.reference}
      src={src}
      alt={props?.alt}
      onClick={(event) => props.handleClick(event)}
      loading={props.loading}
    />
  )
}