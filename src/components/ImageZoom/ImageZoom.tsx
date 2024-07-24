import { useState, useRef, CSSProperties, MouseEvent, TouchEvent } from "react";
import detectClick from "../../Hooks/useDetectClick";
import BlurImage from "../BlurImage/BlurImage";

import "./ImageZoom.css";

interface propTypes {
  image: string
  scale: number
  Placeholder: string
  alt: string
}

export default function ImageZoom(props: propTypes) {
  const { ref, isActive: isZoom, setIsActive: setIsZoom } = detectClick();
  const containerRef = useRef<HTMLInputElement>(null);
  const [offset, setOffset] = useState<{ top: number; left: number }>({
    top: 0,
    left: 0,
  });

  const imageOffsetCalc = (event: MouseEvent | TouchEvent) => {
    const cRect = containerRef.current?.getBoundingClientRect();

    if (cRect) {
      let clientY: number;
      let clientX: number;

      if (event.type === "touchmove") {
        const touchEvent = event as TouchEvent;
        clientX = touchEvent.changedTouches[0].clientX;
        clientY = touchEvent.changedTouches[0].clientY;
      } else {
        const mouseEvent = event as MouseEvent;
        clientY = mouseEvent.clientY;
        clientX = mouseEvent.clientX;
      }

      let ratioX: number = props.scale;
      let ratioY: number = props.scale;

      let limitX: number = ((cRect.width * props.scale) - cRect.width) / 2;
      let limitY: number = ((cRect.height * props.scale) - cRect.height) / 2;

      let top: number = ((clientY - cRect.top) * -ratioY) + limitY * 1.5;
      let left: number = ((clientX - cRect.left) * -ratioX) + limitX * 1.75;

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

  const handleMouseMove = (event: MouseEvent | TouchEvent) => {
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
      onTouchMove={(event: TouchEvent) => handleMouseMove(event)}
    >
      <BlurImage
        className={`image ${isZoom ? "zoom-out" : "zoom-in"}`}
        style={styles}
        reference={ref}
        alt={props.alt}
        handleClick={handleClick}
        lowQualityImg={props.Placeholder}
        highQualityImg={props.image}
      />
    </div>
  );
}
