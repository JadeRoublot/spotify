import React, { useEffect, useState } from 'react';
import {  Footer } from 'antd/es/layout/layout';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { State } from '../../store';
import { Card } from 'antd';
import { Link } from 'react-router-dom';
import './CardPlaylistCss.css';
import { Playlist } from '../../Slices/playlistsSlice';

const CardPlaylist = (playlist : Playlist) => {
   // const dispatch = useDispatch();
   
    
    

    return (
       
            <div>
                 <Link key={playlist.id} to={playlist.id} className={'Link'}>
                    
                    <Card className={'CardPlaylist'} bordered={false}>
                        <Card className={'CardPlaylistCover'} bordered={false} style={{
                        background: `linear-gradient( #${playlist.color1} 0%, #${playlist.color2} 100%)`,
                        }}>
                           
                           
                        </Card>
                        <p className = {'textCard'}>{playlist.title}</p>
                       
                    </Card>

                </Link>
            </div>
    );
};

export default CardPlaylist;
