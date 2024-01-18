import React, { FC } from "react";
import SocialButton from "./common/SocialButton";
import googleLogo from "../assets/googleLogo.png";
import appleLogo from "../assets/appleLogo.png";

type Props = {
  title: string;
  description: string;
};
const SocialLoginCommon: FC<Props> = ({ title, description }) => {
  return (
    <div>
      <div className="text-center ">
        <p className="title text-center font-inter m-0">{title}</p>
        <p className="text-style-18 font-inter text-center medium m-4">
          {description}
        </p>
      </div>
      <div className="flex justify-center gap-4 mt-6">
        <SocialButton className="social-button gap-4 font-inter text-style-16 medium">
          <>
            <img src={googleLogo} height="25px" width="25px" className="mr-3" />
            Sign Up With Google
          </>
        </SocialButton>
        <SocialButton className="social-button gap-4 font-inter text-style-16 medium">
          <>
            <img src={appleLogo} height="24px" width="20px" className="mr-3" />
            Sign Up With Apple
          </>
        </SocialButton>
      </div>
      <div className="flex justify-center items-center gap-4 mt6">
        <div className="divider"></div>
        <p className="text-style-20 my-6">OR</p>
        <div className="divider"></div>
      </div>
    </div>
  );
};

export default SocialLoginCommon;
