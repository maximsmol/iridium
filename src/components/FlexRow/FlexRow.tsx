import { JSX } from "solid-js";

export default function FlexRow(
  props: Omit<JSX.HTMLAttributes<HTMLDivElement>, "style"> & {
    style?: JSX.CSSProperties;
  }
) {
  return <div {...props} style={{ display: "flex", ...props.style }}></div>;
}
