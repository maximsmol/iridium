import { JSX, mergeProps, Show } from "solid-js";
import { Dynamic } from "solid-js/web";

import styles from "./styles.module.css";

import FlexRow from "../FlexRow/FlexRow";

export type ButtonFlavor = "secondary" | "secondary-colored" | "primary";
export type ButtonSize = "inherit" | "h1" | "h2" | "h3";

export type ButtonProps = {
  flavor?: ButtonFlavor;
  size?: ButtonSize;

  labelHidden?: boolean;

  href?: string;

  icon?: JSX.Element;
  children: string;

  style?: JSX.CSSProperties;
};

export default function Button(rawProps: ButtonProps) {
  const props = mergeProps(
    {
      flavor: "secondary",
      size: "inherit",

      hiddenLabel: false,
    },
    rawProps
  );

  return (
    <FlexRow>
      <Dynamic
        component={props.href != null ? "a" : "button"}
        class={styles.container}
        classList={{
          [styles.iconOnly]: props.labelHidden,
          [styles.h1]: props.size === "h1",
          [styles.h2]: props.size === "h2",
          [styles.h3]: props.size === "h3",
          [styles.secondaryColored]: props.flavor === "secondary-colored",
          [styles.primary]: props.flavor === "primary",
        }}
        href={props.href}
        style={props.style}
        aria-label={props.labelHidden ? props.children : undefined}
      >
        {props.icon}
        <Show when={!props.labelHidden}>
          <span>{props.children}</span>
        </Show>
      </Dynamic>
    </FlexRow>
  );
}
