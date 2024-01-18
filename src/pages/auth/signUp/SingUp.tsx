import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { RootState } from "../../../redux/store";
import { useLocation, useNavigate } from "react-router-dom";
import { Button, Checkbox, Form, Input, Spin } from "antd";
import SocialLoginCommon from "../../../components/SocialLoginCommon";
import emlIcon from "../../../assets/eml-icon.png";
import userIcon from "../../../assets/usr-icon.png";
import passIcon from "../../../assets/pas-icon.png";
import DotedDesign from "../../../components/DotedDesign";
import { useRegisterMutation } from "../../../redux/reducer/apiSlice";
import { TRegisterUer, UserData } from "../../../types/Users";
import { setLogin } from "../../../redux/reducer/userSlice";
import useNotification from "../../../hooks/useNotification";

const SingUp = () => {
  const { isAuthenticated } = useAppSelector((state: RootState) => state.user);
  const [register, { data: registerData,isLoading }] = useRegisterMutation();
  const { setMyNotification } = useNotification();
  const dispatch = useAppDispatch()
  const location = useLocation();
  const navigate = useNavigate();

  console.log(registerData,"------..")

  const onFinish = async(values: TRegisterUer) => {
    console.log(values,"values..")
    const {email,password,first_name} = values;
    const regData:any = await register({"email": email,"first_name":first_name,"password": password});
    console.log(regData)
  

    if(regData?.data?.token){
      dispatch(setLogin())
      navigate("/dashboard")
      localStorage.setItem("token",regData?.data?.token)
    }else{
      setMyNotification({
        status: 'error',
        message: regData?.error?.data?.error,
        duration: 2
      });
    }
   
  };



  const gotoSignInPage = () => {
    navigate("/sign-in");
  };

  // useEffect(() => {
  //     if (location.pathname === '/sign-up') {
  //       return isAuthenticated ? navigate('/dashboard') : navigate('/sign-in');
  //     }
  //   }, [navigate, location,isAuthenticated]);
  return (
    <div className="mt-24">
      <SocialLoginCommon
        title="Getting Started"
        description=" Create an account to continue"
      />

      <div className="flex justify-center ">
        <div className="flex justify-center ">
          <Form
            name="login"
            initialValues={{ remember: true }}
            onFinish={onFinish}
            autoComplete="off"
          >
            <Form.Item
              name="email"
              rules={[
                {
                  required: true,
                  message: "Please enter a valid email address",
                },
              ]}
              className="font-inter medium font-14 relative"
            >
              <Input
                prefix={<img src={emlIcon} className="icon-style" />}
                placeholder="Your Email"
                className="form-input medium text-style-16"
              />
            </Form.Item>
            <Form.Item
              name="first_name"
              rules={[{ required: true, message: "Please enter your name" }]}
              className="font-inter medium font-14"
            >
              <Input
                prefix={<img src={userIcon} className="icon-style" />}
                placeholder="Your Name"
                className="form-input mt-4 medium text-style-16"
              />
            </Form.Item>

            <Form.Item
              name="password"
              rules={[
                { required: true, message: "Please input your password!" },
              ]}
              className="font-inter medium font-14"
            >
              <Input.Password
                prefix={<img src={passIcon} className="icon-style" />}
                placeholder="Create Password"
                className="form-input mt-4 medium text-style-16"
              />
            </Form.Item>
            <DotedDesign />
            <Form.Item name="remember" valuePropName="checked">
              <Checkbox
                style={{
                  fontSize: "16px",
                  color: "#B0B7C3",
                  fontFamily: "Inter",
                }}
              >
                I agree to the Terms & Conditions
              </Checkbox>
              
            </Form.Item>
           
            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                className="form-input"
                style={{
                  fontFamily: "Inter",
                  fontSize: "16px",
                  fontWeight: 500,
                }}
              >
                { isLoading ? <Spin /> :"Sign Up"}
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>

      <p className="text-center font-inter text-style-16 pb-8">
        Already have an account?
        <span
          onClick={gotoSignInPage}
          style={{ color: "#377DFF", cursor: "pointer" }}
        >
          {" "}
          Sign In
        </span>
      </p>
    </div>
  );
};

export default SingUp;
