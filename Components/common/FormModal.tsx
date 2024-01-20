import React, { useState } from 'react';
import { Button, Modal } from 'antd';

export default function FormModal({
  showModal,
  handleOk,
  handleCancel,
  isModalOpen,
}: {
  showModal: any;
  handleOk: () => void;
  handleCancel: () => void;
  isModalOpen: boolean;
}) {
  return (
    <>
      <Button type="primary" onClick={showModal}>
        Open Modal
      </Button>
      <Modal
        title="Basic Modal"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
    </>
  );
}
