"use client";

import { ReactNode, useEffect, useRef, useState } from "react";

const useMousePosition = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateMousePosition = (ev: MouseEvent) => {
      setMousePosition({ x: ev.clientX, y: ev.clientY });
    };
    window.addEventListener("mousemove", updateMousePosition);
    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
    };
  }, []);

  return mousePosition;
};

export const AngledElement = ({ children }: { children?: ReactNode }) => {
  const mousePosition = useMousePosition();
  const imageWrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!imageWrapperRef.current) return;
    const { x: mouseX, y: mouseY } = mousePosition;
    const {
      x,
      y,
      height: imageHeight,
      width: imageWidth,
    } = imageWrapperRef.current.getBoundingClientRect();
    const middleX = imageWidth / 2 + x;
    const middleY = imageHeight / 2 + y;

    const maxAngle = 10;

    let offsetX = ((mouseX - middleX) / middleX) * maxAngle;
    let offsetY = ((mouseY - middleY) / middleY) * maxAngle;

    if (offsetX > maxAngle) offsetX = maxAngle;
    if (offsetY > maxAngle) offsetY = maxAngle;

    imageWrapperRef.current.style.setProperty("--rotateX", -offsetY + "deg");
    imageWrapperRef.current.style.setProperty("--rotateY", offsetX + "deg");
  }, [mousePosition]);

  return (
    <div
      className="overflow-hidden w-fit h-fit"
      ref={imageWrapperRef}
      style={{
        transformStyle: "preserve-3d",
        transform:
          "perspective(1000px) rotateX(var(--rotateX)) rotateY(var(--rotateY))",
      }}
    >
      {children}
    </div>
  );
};
