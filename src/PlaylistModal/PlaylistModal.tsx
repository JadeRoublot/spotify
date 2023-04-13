import { Button, Input, Modal } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect, useState } from 'react';
import './PlaylistModalCss.css';
import { State } from '../store';
import { setDisplayModal, newPlaylist } from '../Slices/playlistsSlice';

const PlaylistModal = () => {
    const dispatch = useDispatch();
    const isModalOpen = useSelector((state: State) => state.spotify.displayModal);
    //const [isModalOpen, setIsModalOpen] = useState(true);
    const [newPlaylistName, setNewPlaylistName] = useState<string>("");

    const handleOk = () => {
        
        dispatch(newPlaylist(newPlaylistName));
        dispatch(setDisplayModal(false));
    };
    
      const handleCancel = () => {
        dispatch(setDisplayModal(false));
      };

      
    const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNewPlaylistName(e.target.value);
    };

    return (
        <>
       
       <Modal
        open={isModalOpen}
        title="Create playlist"
        onOk={handleOk}
        onCancel={handleCancel}
        footer={[
         
          <Button key="submit" type="primary" onClick={handleOk}>
           Create
          </Button>
        ]}
      >
        <Input value={newPlaylistName} onChange={handleOnChange} />
      </Modal>
      </>
    );
};

export default PlaylistModal;
