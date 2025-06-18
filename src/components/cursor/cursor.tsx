import { useEffect, useRef, useState } from "react";

export const Cursor = () => {
  const [cursorPosition, setCursorPosition] = useState<[number, number]>([
    0, 0,
  ]);

  const cursorRef = useRef<HTMLDivElement>(null);
  const debounce = useRef<number>(null);

  useEffect(() => {
    const listener = (e: MouseEvent) => {
      setCursorPosition([e.clientX, e.clientY]);

      // // debounce first
      // if (debounce.current !== null) clearTimeout(debounce.current);

      // debounce.current = setTimeout(() => {
      //   console.log(e);
      //   if (!cursorRef.current) return;
      //   if (e.target.tagName === "A") {
      //     cursorRef.current.style.height = "0px";
      //     cursorRef.current.style.width = "0px";
      //   } else if (
      //     e.target.tagName !== "A" &&
      //     cursorRef.current.style.height === "0px"
      //   ) {
      //     cursorRef.current.style.height = "32px";
      //     cursorRef.current.style.width = "32px";
      //   }
      // }, 40);
    };
    document.addEventListener("mousemove", listener);
    return () => document.removeEventListener("mousemove", listener);
  }, []);

  return (
    <div
      ref={cursorRef}
      className="pointer-events-none absolute grid h-8 w-8 place-items-center rounded-full bg-black/10"
      style={{
        left: cursorPosition[0],
        top: cursorPosition[1],
        opacity: 1,
        transform: "translate(-50%, -50%) scale(1)",
      }}
    >
      <div className="h-6 w-6 rounded-full bg-black/20"></div>
    </div>
  );
};
