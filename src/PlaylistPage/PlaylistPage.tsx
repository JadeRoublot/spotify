import { Input, Modal, Table } from 'antd';
import React, { useEffect, useState } from 'react';
import Data from '../static/data.json';
import Columns from '../static/columns.json';
import './PlaylistPageCss.css';
const PlaylistPage = () => {
    const data = Data;
    const columns = Columns;

    return (
      
           <div className="app">
                <div className="upper">
                    <div className="body">
                        <Table dataSource={data} columns={columns} />
                    </div>
                 </div>
            </div>
      
    );
};

export default PlaylistPage;
