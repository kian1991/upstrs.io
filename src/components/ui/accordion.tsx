import {
  type HTMLAttributes,
  type ReactNode,
  useState,
  useImperativeHandle,
  forwardRef,
} from "react";
import classes from "./accordion.module.css";
import { cn } from "../../lib/utils";

export type AccordionHandle = {
  open: () => void;
  close: () => void;
};

type Props = {
  header: string | ReactNode;
} & HTMLAttributes<HTMLDivElement>;

const Accordion = forwardRef<AccordionHandle, Props>(
  ({ header, ...props }, ref) => {
    const [isOpen, setIsOpen] = useState(false);

    useImperativeHandle(ref, () => ({
      open: () => setIsOpen(true),
      close: () => setIsOpen(false),
    }));

    return (
      <div className={cn("py-2", props.className)}>
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
  },
);

export default Accordion;
