import { Button, Input, Modal } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect, useState } from 'react';
import './PlaylistModalCss.css';

const PlaylistModal = () => {
    //const dispatch = useDispatch();
    const [isModalOpen, setIsModalOpen] = useState(true);

    const handleOk = () => {
        setIsModalOpen(false);
      };
    
      const handleCancel = () => {
        setIsModalOpen(false);
      };
    return (
        <>
       
       <Modal
        open={isModalOpen}
        title="Title"
        onOk={handleOk}
        onCancel={handleCancel}
        footer={[
         
          <Button key="submit" type="primary" onClick={handleOk}>
            Submit
          </Button>
        ]}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
      </>
    );
};

export default PlaylistModal;
