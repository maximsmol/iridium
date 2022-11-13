import { JSX } from "solid-js";

export default function FlexGrow(
  props: Omit<JSX.HTMLAttributes<HTMLDivElement>, "style"> & {
    style?: JSX.CSSProperties;
    ratio?: number;
  }
) {
  return (
    <div
      {...props}
      style={{ "flex-grow": props.ratio ?? 1, ...props.style }}
    ></div>
  );
}
