import { JSX } from "solid-js";

import styles from "./styles.module.css";

import Avatar from "../Avatar";

export default function Post(props: { children: JSX.Element }) {
  return (
    <article class={styles.container}>
      <Avatar
        style={{
          "font-size": "var(--font-size-h2)",
        }}
        username="TEST"
      />
      <div class={styles.content}>
        <div class={styles.header}>
          <span class={styles.name}>hi</span>
          <span class={styles.headerData}>
            <span>@test</span>
            <span>•</span>
            <span>27m</span>
          </span>
        </div>
        <div>{props.children}</div>
      </div>
    </article>
  );
}
