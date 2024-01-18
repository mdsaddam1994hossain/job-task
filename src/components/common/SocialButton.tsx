
import React, { ReactNode } from 'react';
import { Button, ButtonProps } from 'antd';

interface SocialButtonProps extends ButtonProps {
  children: ReactNode;
}

const SocialButton: React.FC<SocialButtonProps> = ({ children, ...props }) => {
  return <Button {...props}>{children}</Button>;
};

export default SocialButton;
