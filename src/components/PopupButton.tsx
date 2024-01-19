import { Button, Popover } from "antd";
import React, { FC, useState } from "react";
import optionIcon from "../assets/optionIcon.png";
import CrudModal from "./common/modal/CrudModal";
import { TUser } from "../types/Users";


type TPropUser ={
    user:TUser
}


type MText={
    title:string;
    okText:string
}

const mText : MText ={
    title:"Modal",
    okText:"Ok"
}


const PopupButton:FC<TPropUser> = ({user}) => {
  const [open, setOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [modalText,setModalText] = useState<MText>(mText)
  const [targetUser,setTargetUser] = useState<TUser>(user)

  const hide = () => {
    setOpen(false);
  };

  const handleOpenChange = (newOpen: boolean) => {
    setOpen(newOpen);
  };




  const showModal = (user:TUser,mtitle:string,confirmText:string) => {
    setIsModalOpen(true);
    hide()
    setModalText({
        title:mtitle,
        okText:confirmText
    })
    setTargetUser(user)
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  
  const content = (
    <div className="flex flex-col gap-4">
      <Button type="primary" onClick={()=>showModal(user,"Create new user","Create")}>Add User</Button>
      <Button type="primary"  onClick={()=>showModal(user,"Update user","Update")} ghost>Edit User</Button>
      <Button type="primary" onClick={()=>showModal(user,"Delete user","Delete")} danger>Delete User</Button>
    </div>
  );
  return (
    <>
      <Popover
      content={content}
      trigger="click"
      open={open}
      onOpenChange={handleOpenChange}
    >
      <img src={optionIcon} className="option-icon" />
    </Popover>

     <CrudModal title={modalText.title} okText={modalText.okText} visible={isModalOpen}  handleCancel={handleCancel} user={targetUser}  />
    </>
  );
};

export default PopupButton;
