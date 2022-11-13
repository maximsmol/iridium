import { JSX } from "solid-js";

export default function FlexColumn(
  props: Omit<JSX.HTMLAttributes<HTMLDivElement>, "style"> & {
    style?: JSX.CSSProperties;
  }
) {
  return (
    <div
      {...props}
      style={{ display: "flex", "flex-direction": "column", ...props.style }}
    ></div>
  );
}
