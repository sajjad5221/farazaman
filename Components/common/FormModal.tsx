import React, { useState } from 'react';
import { Modal } from 'antd';

export default function FormModal({
  handleOk,
  handleCancel,
  isModalOpen,
}: {
  handleOk: () => void;
  handleCancel: () => void;
  isModalOpen: boolean;
}) {
  return (
    <>
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
