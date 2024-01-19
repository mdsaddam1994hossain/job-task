import React, { FC, ReactNode } from 'react';
import { Modal } from 'antd';

type ModalProps ={
  title:string;
  visible:boolean;
  okText:string;
  handleCancel:()=>void;
  children:ReactNode
}

const CustomModal:FC<ModalProps> = ({title,visible,okText,handleCancel,children}) => {
    return (
       <Modal  footer={false} title={title} centered okText={okText} open={visible}  onCancel={handleCancel}>
        {children}
      </Modal>
    );
};

export default CustomModal;