import { useState } from "react";

export default function X({ fill, onMouseOverFill, width, height }) {
  const [onMouseOverStatus, setOnMouseOverStatus] = useState(0);

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill={onMouseOverStatus ? onMouseOverFill : fill}
      viewBox="0 0 256 256"
      onMouseEnter={() => setOnMouseOverStatus(1)}
      onMouseLeave={() => setOnMouseOverStatus(0)}
    >
      <path d="M205.66,194.34a8,8,0,0,1-11.32,11.32L128,139.31,61.66,205.66a8,8,0,0,1-11.32-11.32L116.69,128,50.34,61.66A8,8,0,0,1,61.66,50.34L128,116.69l66.34-66.35a8,8,0,0,1,11.32,11.32L139.31,128Z"></path>
    </svg>
  );
}
