import { JSX } from "solid-js";

import styles from "./styles.module.css";

export default function Avatar(props: {
  username: string;
  style?: JSX.CSSProperties;
}): JSX.Element {
  return (
    <a class={styles.container} href={`/${props.username}`} style={props.style}>
      {/* todo(maximsmol): alt should be a full name? */}
      <img
        alt={props.username}
        class={styles.image}
        src="https://i.pravatar.cc/300?img=1"
      />
      <div class={styles.shader} />
    </a>
  );
}
