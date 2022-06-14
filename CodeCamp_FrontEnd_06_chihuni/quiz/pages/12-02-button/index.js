import { Modal, Button } from 'antd';
import { useState } from 'react';

export default function ModalCustomPage() {
  const [isOpen, setIsOpen] = useState(false);
  const [password, setPassword] = useState('');

  const aaa = () => {
    setIsOpen((prev) => !prev);
  };

  // const showModal = () => {
  //   setIsOpen((prev) => !prev);
  // };

  // const handleOk = () => {
  //   setIsOpen((prev) => !prev);
  // };

  // const handleCancel = () => {
  //   setIsOpen((prev) => !prev);
  // };

  // const onChangePassword = (event) => {
  //   setPassword(event.target.value);
  // };
  // console.log(password);

  return (
    <>
      <Button onClick={aaa}>모달 열기</Button>
      <Modal title='게시글 등록' visible={isOpen} onOk={aaa} onCancel={aaa}>
        게시물이 등록되었습니다.
      </Modal>
      {/* <Modal title='게시글 등록' visible={isOpen} onOk={handleOk} onCancel={handleCancel}>
        게시물이 등록되었습니다.
      </Modal> */}
    </>
  );
}
