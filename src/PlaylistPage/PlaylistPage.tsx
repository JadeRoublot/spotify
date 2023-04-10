import { Input, Modal, Table } from 'antd';
import React, { useEffect, useState } from 'react';
import { Header } from 'antd/es/layout/layout';
import Data from '../static/data.json';
import Columns from '../static/columns.json';
import './PlaylistPageCss.css';
import HeaderPlaylist from './Header';
import { useParams } from 'react-router-dom';

const PlaylistPage = () => {
    const param = useParams();
    const data = Data;
    const columns = Columns;

    console.log(param);

    return (
      
           <div className="app">
              <HeaderPlaylist/>
                <div className="upper">
                    <div className="body">
                        <Table dataSource={data} columns={columns} />
                    </div>
                 </div>
            </div>
      
    );
};

export default PlaylistPage;
