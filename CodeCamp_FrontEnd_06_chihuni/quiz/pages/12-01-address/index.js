import { Modal, Button } from "antd";
import { useState } from "react";
import DaumPostcode from "react-daum-postcode";

export default function ModalCustomPage() {
  const [isOpen, setIsOpen] = useState(false);

  const showModal = () => {
    setIsOpen(true);
  };

  const handleOk = () => {
    setIsOpen(false);
  };

  const handleCancel = () => {
    setIsOpen(false);
  };

  const handleComplete = (data) => {
    console.log(data);
    setIsOpen(false);
  };
  return (
    <>
    <DaumPostcode onComplete={handleComplete} />
      {/* 모달 삭제하고 새로 만드는 방법 */}
      {/* {isOpen && (
        <Modal
          // title="Basic Modal"
          visible={true} // 항상 키겠습니다.
          onOk={handleOk}
          onCancel={handleCancel}
        >
          <DaumPostcode onComplete={handleComplete} />
        </Modal>
      )} */}

      {/* 모달 숨겼다가 나타나게 하는 방법 */}
      {/* <Modal
        // title="Basic Modal"
        visible={isOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <DaumPostcode onComplete={handleComplete} />
      </Modal> */}
    </>
  );
}
