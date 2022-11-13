import * as Icon from "lucide-solid";
import { createSignal, JSX } from "solid-js";

import { randInt } from "../../utils";

import FlexGrow from "../../components/FlexGrow";
import LeftSidebar from "../../components/LeftSidebar";
import styles from "./styles.module.css";

const orderByPageNames = {
  time: "Latest Posts",
  likes: "Home",
};
type OrderBy = keyof typeof orderByPageNames;

const orderByIcons: Record<OrderBy, JSX.Element> = {
  time: <Icon.Rss />,
  likes: <Icon.TrendingUp />,
};

const placeholderPhrases = [
  "I've been wondering",
  "Hot off the press",
  "I've been thinking",
  "Fun fact",
  "The more I look at it",
];

export default function Home() {
  const [orderBy, setOrderBy] = createSignal<OrderBy>("time");

  return (
    <div class={styles.container}>
      <FlexGrow />
      <LeftSidebar />
      <div class={styles.contentArea}>
        <div class={styles.header}>
          <div>{orderByPageNames[orderBy()]}</div>
          <FlexGrow />
          {/* todo(maximsmol): does nothing */}
          {orderByIcons[orderBy()]}
        </div>
        <div class={styles.composerContainer}>
          {/* todo(maximsmol): does nothing */}
          <div>
            <a class={styles.avatarContainer} href="/{username}">
              <img
                class={styles.avatar}
                src="https://i.pravatar.cc/300?img=1"
              />
            </a>
          </div>
          <div class={styles.composer}>
            <textarea
              rows={1}
              placeholder={`${
                placeholderPhrases[randInt(0, placeholderPhrases.length)]
              }…`}
            />
            <div class={styles.controls}>
              <button class={styles.button}>
                <Icon.Image />
              </button>
              <button class={styles.button}>
                {/* todo(maximsmol): icon for GIF */}
                <Icon.FileImage />
              </button>
              <button class={styles.button}>
                {/* todo(maximsmol): icon for poll */}
                <Icon.List />
              </button>
              <button class={styles.button}>
                <Icon.Smile />
              </button>
              <button class={styles.button}>
                <Icon.CalendarClock />
              </button>
              <button class={styles.button}>
                <Icon.MapPin />
              </button>
              <FlexGrow />
              <div>
                <button class={styles.btnPost}>Post</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class={styles.sidebar}></div>
      <FlexGrow />
    </div>
  );
}
