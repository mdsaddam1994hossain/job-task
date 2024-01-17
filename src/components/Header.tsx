import React, { useState } from "react";
import logo from "../../src/assets/logo.png";
import { Button, Dropdown, MenuProps } from "antd";
import { DownOutlined } from "@ant-design/icons";

const items: MenuProps["items"] = [
  {
    key: "1",
    label: "English(UK)",
  },
];

const Header = () => {
  const [language, setLanguage] = useState("English(UK)");

  return (
    <header className="app-header">
      <div>
        <img src={logo} className="app-logo" />
      </div>
      <div>
        <Dropdown
          className="dropDownButton"
          menu={{ items }}
          placement="bottomLeft"
        >
          <Button>
            {language} <DownOutlined />
          </Button>
        </Dropdown>
      </div>
    </header>
  );
};

export default Header;
