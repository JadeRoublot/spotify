import React, { useEffect, useState } from 'react';
import {  Footer } from 'antd/es/layout/layout';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { State } from '../../store';
import { Card } from 'antd';
import { Link } from 'react-router-dom';
import './CardTop50Css.css';

const CardTop50 = () => {
   // const dispatch = useDispatch();
   
    
    

    return (
       
            <div>

                <Link to={`/LikedSong`} className={'Link50'} >

                    <Card className={'CardTop50'} bordered={false}>
                        <Card className={'CardTop50Cover'} bordered={false}>
                            <p>Card content</p>
                            <p>Card content</p>
                        </Card>

                        <p>Card content</p>
                        <p>Card content</p>
                        <p>Card content</p>
                    </Card>

                </Link>

            </div>
    );
};

export default CardTop50;
