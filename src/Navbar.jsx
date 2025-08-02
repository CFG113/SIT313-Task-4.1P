import React from "react";
import { Menu, Input } from "semantic-ui-react";

const Navbar = () => {
  return (
    <Menu borderless style={{ padding: "1em", backgroundColor: "#f0f0f0" }}>
      {/* Left: Logo/Title */}
      <Menu.Item header>DEV@Deakin</Menu.Item>

      {/* Center: Search input */}
      <Menu.Item style={{ flex: 1 }}>
        <Input fluid icon="search" placeholder="Search..." />
      </Menu.Item>

      {/* Right: Links */}
      <Menu.Menu position="right">
        <Menu.Item name="Post" />
        <Menu.Item name="Login" />
      </Menu.Menu>
    </Menu>
  );
};

export default Navbar;
