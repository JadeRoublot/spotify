import { Input, Modal, Table } from 'antd';
import React, { useEffect, useState } from 'react';
import Data from '../static/data.json';
import Columns from '../static/columns.json';

const PlaylistPage = () => {
    const data = Data;
    const columns = Columns;

    return (
        <div style={{ paddingLeft: 250, textAlign: 'center'}}>
           <Table dataSource={data} columns={columns} />
        </div>
      
    );
};

export default PlaylistPage;
