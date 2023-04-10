import React, { useEffect, useState } from 'react';
import {  Footer } from 'antd/es/layout/layout';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { State } from '../../store';
import { Card } from 'antd';
import { Link } from 'react-router-dom';
import './CardTop50Css.css';

import {PlaylistTop} from "../../Slices/playlistsSlice";

const CardTop50 = (playlistTop : PlaylistTop) => {
   // const dispatch = useDispatch();
   

    return (
       
            <div>

                <Link  key={playlistTop.id} to={playlistTop.id} className={'Link50'} >

                    <Card className={'CardTop50'} bordered={false}>
                        <Card className={'CardTop50Cover'} bordered={false}style={{
                        background: `linear-gradient( #${playlistTop.color1} 0%, #${playlistTop.color2} 100%)`,
                        }}> 
                        <div className={'textCoverTop50'} >
                            <p>TOP 50</p>
                            <p>{playlistTop.year}</p>
                        </div>
                        </Card>

                        <p>TOP 50</p>
                        <p>{playlistTop.year}</p>
                    </Card>

                </Link>

            </div>
    );
};

export default CardTop50;
