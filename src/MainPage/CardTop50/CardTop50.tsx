import React, { useEffect, useState } from 'react';
import {  Footer } from 'antd/es/layout/layout';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { State } from '../../store';
import { Card } from 'antd';
import { Link } from 'react-router-dom';


const CardTop50 = () => {
   // const dispatch = useDispatch();
   
    
    

    return (
       
            <div>

                <Link to={`/LikedSong`} className={'Link'}>

                    <Card style={{ width: 300 }}>
                        <p>Card content</p>
                        <p>Card content</p>
                        <p>Card content</p>
                    </Card>

                </Link>

            </div>
    );
};

export default CardTop50;
