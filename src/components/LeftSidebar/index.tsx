import * as Icon from "lucide-solid";

import styles from "./styles.module.css";

import Button from "../Button";

export default function LeftSidebar() {
  return (
    <div class={styles.container}>
      <Button
        icon={<Icon.Aperture />}
        flavor="secondary-colored"
        labelHidden
        size="h1"
        href="/home"
      >
        Home
      </Button>
      <nav class={styles.sidebarNav}>
        <Button icon={<Icon.Home />} href="/home">
          Home
        </Button>
        <Button icon={<Icon.Hash />} href="/explore">
          Explore
        </Button>
        <Button icon={<Icon.Bell />} href="/notifications">
          Notifications
        </Button>
        <Button icon={<Icon.Mail />} href="/mail">
          Messages
        </Button>
        <Button icon={<Icon.Bookmark />} class={styles.extra} href="/bookmarks">
          Bookmarks
        </Button>
        <Button
          icon={<Icon.List />}
          class={styles.extra}
          href="/{username}/lists"
        >
          {/* todo(maximsmol): matching icon */}
          {/* todo(maximsmol): does nothing */}
          Lists
        </Button>
        <Button icon={<Icon.User />} href="/{username}">
          {/* todo(maximsmol): does nothing */}
          Profile
        </Button>
        <Button icon={<Icon.CircleEllipsis />} href="/">
          {/* todo(maximsmol): does nothing */}
          More
        </Button>
      </nav>
      <Button
        flavor="primary"
        style={{
          width: "90%",
          padding: "calc(14.75em / 22) 2em",
          "font-size": "var(--font-size-h3)",
        }}
        href="/compose/post"
      >
        Post
      </Button>
    </div>
  );
}
