import { useState, useRef, CSSProperties, MouseEvent } from "react";
import detectClick from "../../Hooks/useDetectClick";
import BlurImage from "../BlurImage/BlurImage";

import "./ImageZoom.css";

interface propTypes {
  image: string
  scale: number
  Placeholder: string
}

export default function ImageZoom(props: propTypes) {
  const { ref, isActive: isZoom, setIsActive: setIsZoom } = detectClick();
  const containerRef = useRef<HTMLInputElement>(null);
  const [offset, setOffset] = useState<{ top: number; left: number }>({
    top: 0,
    left: 0,
  });

  const imageOffsetCalc = (event: MouseEvent) => {
    const cRect = containerRef.current?.getBoundingClientRect();

    if (cRect) {
      let ratioX: number = props.scale;
      let ratioY: number = props.scale;

      let limitX: number = ((cRect.width * props.scale) - cRect.width) / 2;
      let limitY: number = ((cRect.height * props.scale) - cRect.height) / 2;

      let top: number = ((event.clientY - cRect.top) * -ratioY) + limitY * 1.5;
      let left: number = ((event.clientX - cRect.left) * -ratioX) + limitX * 1.75;

      top = Math.max(-limitY, Math.min(limitY, top));
      left = Math.max(-limitX, Math.min(limitX, left));
      return {top: top, left: left}
    }
    return null
  }

  const handleClick = (event: MouseEvent) => {
    setIsZoom((prevState) => !prevState);
    let newOffset = imageOffsetCalc(event);
    if (newOffset) {
      setOffset({
        top: newOffset.top,
        left: newOffset.left,
      });
    }
  };

  const handleMouseMove = (event: MouseEvent) => {
    const newOffset = imageOffsetCalc(event);
    if (newOffset) {
      setOffset({
        top: newOffset.top,
        left: newOffset.left,
      });
    }
  };

  const styles: CSSProperties = {
    position: isZoom ? "relative" : "static",
    top: isZoom ? offset.top : 0,
    left: isZoom ? offset.left : 0,
    display: isZoom ? "inline" : "flex",
    transform: isZoom ? `scale(${props.scale})` : "none",
  };

  return (
    <div
      className="image-zoom-container"
      title={isZoom ? "" : "Click To Zoom In"}
      ref={containerRef}
      onMouseMove={(event: MouseEvent) => handleMouseMove(event)}
    >
      <BlurImage
        className={`image ${isZoom ? "zoom-out" : "zoom-in"}`}
        style={styles}
        reference={ref}
        alt=""
        handleClick={handleClick}
        lowQualityImg={props.Placeholder}
        highQualityImg={props.image}
      />
    </div>
  );
}
