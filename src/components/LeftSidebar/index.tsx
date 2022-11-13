import * as Icon from "lucide-solid";
import { JSX } from "solid-js";

import FlexRow from "../FlexRow/FlexRow";
import styles from "./styles.module.css";

const navItems = [
  {
    icon: <Icon.Home />,
    href: "/home",
    title: "Home",
  },
  {
    icon: <Icon.Hash />,
    href: "/explore",
    title: "Explore",
  },
  {
    icon: <Icon.Bell />,
    href: "/notifications",
    title: "Notifications",
  },
  {
    icon: <Icon.Mail />,
    href: "/messages",
    title: "Messages",
  },
  {
    icon: <Icon.Bookmark />,
    href: "/bookmarks",
    title: "Bookmarks",
  },
];

const NavItem = (props: {
  href: string;
  icon: JSX.Element;
  children: JSX.Element;
}) => {
  return (
    <FlexRow>
      <a class={styles.navItem} href={props.href}>
        {props.icon}
        <span>{props.children}</span>
      </a>
    </FlexRow>
  );
};

export default function LeftSidebar() {
  return (
    <div class={styles.container}>
      <FlexRow>
        <a class={styles.logo} href="/home">
          <Icon.Aperture />
        </a>
      </FlexRow>
      <nav class={styles.sidebarNav}>
        <NavItem icon={<Icon.Home />} href="/home">
          Home
        </NavItem>
        <NavItem icon={<Icon.Hash />} href="/explore">
          Explore
        </NavItem>
        <NavItem icon={<Icon.Bell />} href="/notifications">
          Notifications
        </NavItem>
        <NavItem icon={<Icon.Mail />} href="/mail">
          Messages
        </NavItem>
        <NavItem icon={<Icon.Bookmark />} href="/bookmarks">
          Bookmarks
        </NavItem>
        <NavItem icon={<Icon.List />} href="/{username}/lists">
          {/* todo(maximsmol): matching icon */}
          {/* todo(maximsmol): does nothing */}
          Lists
        </NavItem>
        <NavItem icon={<Icon.User />} href="/{username}">
          {/* todo(maximsmol): does nothing */}
          Profile
        </NavItem>
        <NavItem icon={<Icon.CircleEllipsis />} href="/">
          {/* todo(maximsmol): does nothing */}
          More
        </NavItem>
      </nav>
      <FlexRow>
        <a class={styles.btnPost} href="/compose/post">
          Post
        </a>
      </FlexRow>
    </div>
  );
}
