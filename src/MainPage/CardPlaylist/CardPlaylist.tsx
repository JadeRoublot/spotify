import React, { useEffect, useState } from 'react';
import {  Footer } from 'antd/es/layout/layout';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { State } from '../../store';
import { Card } from 'antd';
import { Link } from 'react-router-dom';
import './CardPlaylistCss.css';

const CardPlaylist = () => {
   // const dispatch = useDispatch();
   
    
    

    return (
       
            <div>
                 <Link to={`/LikedSong`} className={'Link'}>
                    
                    <Card className={'CardPlaylist'} bordered={false}>
                        <Card className={'CardPlaylistCover'}>
                           
                           
                        </Card>
                        <p className = {'textCard'}>Card content</p>
                       
                    </Card>

                </Link>
            </div>
    );
};

export default CardPlaylist;
