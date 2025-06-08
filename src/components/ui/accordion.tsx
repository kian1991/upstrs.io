import { type HTMLAttributes, useState } from "react";
import classes from "./accordion.module.css";

type Props = {
  header: string;
} & HTMLAttributes<HTMLDivElement>;

function Accordion({ header, ...props }: Props) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={classes.container}>
      <div className={classes.header} onClick={() => setIsOpen(!isOpen)}>
        <span>{header}</span>
        <div
          className={classes.dial}
          style={{
            rotate: isOpen ? "-45deg" : "0deg",
          }}
        >
          <span
            style={{
              width: isOpen ? "24px" : "18px",
            }}
          ></span>
          <span
            style={{
              width: isOpen ? "24px" : "18px",
            }}
          ></span>
        </div>
      </div>
      <div
        className={classes.collapse}
        style={{
          gridTemplateRows: isOpen ? "1fr" : "0fr",
        }}
      >
        <div>
          <div className={classes.content}>{props.children}</div>
        </div>
      </div>
    </div>
  );
}

export default Accordion;
