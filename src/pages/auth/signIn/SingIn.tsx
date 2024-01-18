import React, { useEffect } from "react";
import { RootState } from "../../../redux/store";
import { useAppSelector } from "../../../redux/hooks";
import { useLocation, useNavigate } from "react-router-dom";
import emlIcon from "../../../assets/eml-icon.png";
import passIcon from "../../../assets/pas-icon.png";

import { Button, Checkbox, Form, Input } from "antd";
import SocialLoginCommon from "../../../components/SocialLoginCommon";

const SingIn = () => {
  const { isAuthenticated } = useAppSelector((state: RootState) => state.user);
  const location = useLocation();
  const navigate = useNavigate();

  const onFinish = (values: any) => {
    console.log("Success:", values);
  };

  const gotoSignUpPage = () => {
    navigate("/sign-up");
  };

  // useEffect(() => {
  //   if (location.pathname === "/sign-in") {
  //     return isAuthenticated ? navigate("/dashboard") : navigate("/sign-in");
  //   }
  // }, [navigate, location, isAuthenticated]);

  return (
    <div className="mt-24">
      <SocialLoginCommon
        title="Getting Started"
        description=" Create an account to continue"
      />

      <div className="flex justify-center ">
        <Form
          name="basic"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          autoComplete="off"
        >
          <Form.Item
            name="email"
            rules={[
              { required: true, message: "Please enter a valid email address" },
            ]}
            className="font-inter medium font-14"
          >
            <Input
              prefix={<img src={emlIcon} className="icon-style" />}
              placeholder="Your Email"
              className="form-input medium text-style-16"
            />
          </Form.Item>

          <Form.Item
            name="password"
            rules={[{ required: true, message: "Please input your password!" }]}
            className="font-inter medium font-14"
          >
            <Input.Password
              prefix={<img src={passIcon} className="icon-style" />}
              placeholder="Create Password"
              className="form-input mt-4 medium text-style-16"
            />
          </Form.Item>

          <Form.Item name="remember" valuePropName="checked">
            <Checkbox
              style={{
                fontSize: "16px",
                color: "#B0B7C3",
                fontFamily: "Inter",
              }}
            >
              Remember Me
            </Checkbox>
            {/* /<input type="checkbox" className="check-box"  /> */}
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="form-input"
              style={{ fontFamily: "Inter", fontSize: "16px", fontWeight: 500 }}
            >
              Sign In
            </Button>
          </Form.Item>
        </Form>
      </div>

      <p className="text-center font-inter text-style-16 pb-8">
        Already have an account?
        <span
          onClick={gotoSignUpPage}
          style={{ color: "#377DFF", cursor: "pointer" }}
        >
          {" "}
          Sign Up
        </span>
      </p>
    </div>
  );
};

export default SingIn;
