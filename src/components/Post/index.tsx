import * as Icon from "lucide-solid";
import { JSX, Show } from "solid-js";

import styles from "./styles.module.css";

import Avatar from "../Avatar";
import FlexRow from "../FlexRow/FlexRow";

export default function Post(props: {
  repostedBy: string;
  children: JSX.Element;
}) {
  return (
    <article class={styles.container}>
      <Show when={props.repostedBy != null}>
        <div class={styles.repostLine}>
          <Icon.Repeat />
          <span>{props.repostedBy} Reposted</span>
        </div>
      </Show>
      <FlexRow>
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
      </FlexRow>
    </article>
  );
}
