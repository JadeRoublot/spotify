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
        title= {<div className={'ModalHead'}>Create playlist</div>}
        onOk={handleOk}
        onCancel={handleCancel}
        className={'Modal'}
        footer={[
         
          <Button className={'ModalButton'} key="submit" type="primary" onClick={handleOk}>
           Create
          </Button>
        ]}
      >
        <Input className={'ModalInput'} value={newPlaylistName} onChange={handleOnChange} />
      </Modal>
      </>
    );
};

export default PlaylistModal;
