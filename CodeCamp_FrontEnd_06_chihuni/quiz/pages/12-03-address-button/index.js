import { Modal, Button } from 'antd';
import { useState } from 'react';
import DaumPostcode from 'react-daum-postcode';

export default function ModalCustomPage() {
  const [isOpen, setIsOpen] = useState(false);
  const [address, setAddress] = useState('');

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
    console.log(data.address);
    setAddress(data.address);
  };
  return (
    <>
      <Button onClick={showModal}>모달 열기</Button>
      <div>{address}</div>
      {/* 모달 삭제하고 새로 만드는 방법 */}
      {isOpen && (
        <Modal
          visible={true} // 항상 키겠습니다.
          onOk={handleOk}
          onCancel={handleCancel}
        >
          <DaumPostcode onComplete={handleComplete} />
        </Modal>
      )}
    </>
  );
}
