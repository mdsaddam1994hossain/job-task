import React, { FC } from "react";
import CustomModal from "./CustomModal";
import { Button, Form, Input, Spin } from "antd";
import { TUser } from "../../../types/Users";
import {
  useCreateUserMutation,
  useDeleteUserMutation,
  useGetUsersQuery,
  useUpdateUserMutation,
} from "../../../redux/reducer/apiSlice";
import useNotification from "../../../hooks/useNotification";

type ModalProps = {
  title: string;
  visible: boolean;
  okText: string;
  handleCancel: () => void;
  user: TUser;
};

const CrudModal: FC<ModalProps> = ({
  title,
  visible,
  okText,
  handleCancel,
  user,
}) => {
  const [updateUser, { isLoading }] = useUpdateUserMutation();
  const [deleteUser, { isLoading: deleteLoading }] = useDeleteUserMutation();
  const {
    data: users,
    isLoading: isUsersLoading,
    refetch,
  } = useGetUsersQuery();
  const { setMyNotification } = useNotification();
  const [
    createUser,
    { isLoading: createLoading, isSuccess, data: successData },
  ] = useCreateUserMutation();

  const formSubmit = async (value: TUser) => {
    if (okText === "Delete") {
      try {
        await deleteUser(user.id);
        refetch();
        handleCancel();
        setMyNotification({
          status: "success",
          message: `Successfully Deleted id-${user?.id}`,
          duration: 2,
        });
      } catch (error: any) {
        setMyNotification({
          status: "error",
          message: error?.data?.error,
          duration: 2,
        });
      }
    } else if (okText === "Update") {
      try {
        await updateUser({
          id: user.id,
          data: { name: value.first_name, job: value?.email },
        });
        handleCancel();
        refetch();
        setMyNotification({
          status: "success",
          message: `Successfully updated id-${user?.id}`,
          duration: 2,
        });
      } catch (error: any) {
        setMyNotification({
          status: "error",
          message: error?.data?.error,
          duration: 2,
        });
      }
    } else {
      try {
        await createUser({
          name: value.first_name,
          job: value?.email,
        });
        handleCancel();
        refetch();
        setMyNotification({
          status: "success",
          message: `Successfully Created new user`,
          duration: 2,
        });
      } catch (error: any) {
        setMyNotification({
          status: "error",
          message: error?.data?.error,
          duration: 2,
        });
      }
    }
  };

  return (
    <CustomModal
      title={title}
      visible={visible}
      okText={okText}
      // handleOk={handleOk}
      handleCancel={handleCancel}
    >
      <div>
        {okText === "Delete" ? (
          <div>
            <p>Are you sure you want to delete {user.first_name} user?</p>
            <div className="flex jestify-right">
              <Button
                type="primary"
                htmlType="submit"
                onClick={() => formSubmit(user)}
                className="modal-ok-button"
                danger
              >
                {deleteLoading ? <Spin /> : okText}
              </Button>
            </div>
          </div>
        ) : (
          <Form
            name="basic"
            onFinish={formSubmit}
            autoComplete="off"
            initialValues={
              okText === "Update"
                ? {
                    first_name: user?.first_name,
                    email: user?.email,
                  }
                : {}
            }
          >
            <Form.Item
              name="first_name"
              rules={[
                { required: true, message: "Please enter your first name" },
              ]}
              className="font-inter medium font-14"
            >
              <Input
                placeholder="User First Name"
                className=" medium text-style-16"
              />
            </Form.Item>
            <Form.Item
              name="email"
              rules={[
                {
                  required: true,
                  message: "Please enter a valid email address",
                },
              ]}
              className="font-inter medium font-14"
            >
              <Input
                placeholder="User Email"
                className=" medium text-style-16"
              />
            </Form.Item>

            <Form.Item className="flex jestify-right">
              <Button
                type="primary"
                htmlType="submit"
                className="modal-ok-button"
              >
                {createLoading || isLoading ? <Spin /> : okText}
              </Button>
            </Form.Item>
          </Form>
        )}
      </div>
    </CustomModal>
  );
};

export default CrudModal;
