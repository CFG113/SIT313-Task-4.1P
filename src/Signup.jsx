import React from "react";
import { Menu, Input, Button } from "semantic-ui-react";

const SignupBar = () => {
  return (
    <Menu borderless style={{ padding: "1em", backgroundColor: "#d3d3d3" }}>
      {/* Left: Label */}
      <Menu.Item header style={{ letterSpacing: "0.05em" }}>
        SIGN UP FOR OUR DAILY INSIDER
      </Menu.Item>

      {/* Right: Email input and Subscribe button */}
      <Menu.Menu position="right">
        <Menu.Item>
          <Input
            type="email"
            placeholder="Enter your email"
            style={{ borderRadius: 0 }}
          />
        </Menu.Item>
        <Menu.Item>
          <Button
            style={{ borderRadius: 0, backgroundColor: "#999", color: "black" }}
          >
            Subscribe
          </Button>
        </Menu.Item>
      </Menu.Menu>
    </Menu>
  );
};

export default SignupBar;
