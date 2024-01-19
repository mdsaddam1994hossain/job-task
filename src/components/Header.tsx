import React, { useState } from "react";
import logo from "../../src/assets/logo.png";
import { Button, Dropdown, Input, MenuProps, Popover } from "antd";
import { DownOutlined } from "@ant-design/icons";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { RootState } from "../redux/store";
import notificationIcon from "../assets/notification-icon.png";
import { setLogout } from "../redux/reducer/userSlice";
import { useNavigate } from "react-router-dom";

const items: MenuProps["items"] = [
  {
    key: "1",
    label: "English(UK)",
  },
];

const Header = () => {
  const [language, setLanguage] = useState("English(UK)");
  const { isAuthenticated } = useAppSelector((state: RootState) => state.user);
  const dispatch = useAppDispatch();
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogOut = () => {
    dispatch(setLogout());
    localStorage.clear();
    navigate("/sign-in");
    setOpen(false);
  };

  const handleOpenChange = (newOpen: boolean) => {
    setOpen(newOpen);
  };
  return (
    <>
      {isAuthenticated ? (
        <header className="app-header">
          <div>
            <Input
              placeholder="Search"
              className="font-inter medium font-14 search-input"
            />
          </div>
          <div className="flex gap-4 items-center">
            <img
              src={notificationIcon}
              alt="error"
              height="24px"
              width="24px"
            />

            <Popover
              content={
                <a className="semi-bold text-style-16" onClick={handleLogOut}>
                  Sign Out
                </a>
              }
              trigger="click"
              open={open}
              onOpenChange={handleOpenChange}
            >
              <img
                src="https://thumbs.dreamstime.com/b/identify-people-icon-gray-background-identify-people-icon-136622640.jpg"
                className="profile-img"
                alt="error"
              />
            </Popover>
          </div>
        </header>
      ) : (
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
      )}
    </>
  );
};

export default Header;
