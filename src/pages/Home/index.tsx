import * as Icon from "lucide-solid";
import { createSignal, JSX } from "solid-js";

import { randInt } from "../../utils";

import styles from "./styles.module.css";

import Avatar from "../../components/Avatar";
import Button from "../../components/Button";
import FlexGrow from "../../components/FlexGrow";
import LeftSidebar from "../../components/LeftSidebar";
import Post from "../../components/Post";

const orderByPageNames = {
  time: "Latest Posts",
  likes: "Home",
};
type OrderBy = keyof typeof orderByPageNames;

const orderByIcons: Record<OrderBy, JSX.Element> = {
  time: <Icon.Rss />,
  likes: <Icon.TrendingUp />,
};
const orderByText: Record<OrderBy, string> = {
  time: "Latest Posts",
  likes: "Top Posts",
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
          <Button icon={orderByIcons[orderBy()]} labelHidden>
            {orderByText[orderBy()]}
          </Button>
        </div>
        <div class={styles.composerContainer}>
          {/* todo(maximsmol): does nothing */}
          <div>
            <Avatar username="{todo}" />
          </div>
          <div class={styles.composer}>
            <textarea
              rows={1}
              placeholder={`${
                placeholderPhrases[randInt(0, placeholderPhrases.length)]
              }…`}
            />
            <div class={styles.controls}>
              <Button
                flavor="secondary-colored"
                icon={<Icon.Image />}
                labelHidden
              >
                Image or Video
              </Button>
              <Button
                flavor="secondary-colored"
                icon={<Icon.FileImage />}
                labelHidden
              >
                {/* todo(maximsmol): icon for GIF */}
                GIF
              </Button>
              <Button
                flavor="secondary-colored"
                icon={<Icon.List />}
                labelHidden
              >
                {/* todo(maximsmol): icon for poll */}
                Poll
              </Button>
              <Button
                flavor="secondary-colored"
                icon={<Icon.Smile />}
                labelHidden
              >
                Emoji
              </Button>
              <Button
                flavor="secondary-colored"
                icon={<Icon.CalendarClock />}
                labelHidden
              >
                Schedule
              </Button>
              <Button
                flavor="secondary-colored"
                icon={<Icon.MapPin />}
                labelHidden
              >
                Add Location Tag
              </Button>
              <FlexGrow />
              <Button
                flavor="primary"
                style={{
                  padding: "0.3em 0.8em",
                }}
              >
                Post
              </Button>
            </div>
          </div>
        </div>
        <Post>Test post</Post>
        <Post>Test post</Post>
        <Post>Test post</Post>
        <Post>Test post</Post>
        <Post>Test post</Post>
        <Post>Test post</Post>
        <Post>Test post</Post>
        <Post>Test post</Post>
        <Post>Test post</Post>
        <Post>Test post</Post>
        <Post>Test post</Post>
        <Post>Test post</Post>
        <Post>Test post</Post>
        <Post>Test post</Post>
        <Post>Test post</Post>
      </div>
      <div class={styles.sidebar}></div>
      <FlexGrow />
    </div>
  );
}
