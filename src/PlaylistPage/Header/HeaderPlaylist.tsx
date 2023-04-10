import { Card, Input, Modal, Table } from 'antd';
import React, { useEffect, useState } from 'react';
import { Header } from 'antd/es/layout/layout';

import './HeaderPlaylistCss.css';
import { Playlist, PlaylistTop } from '../../Slices/playlistsSlice';
import { HeartFilled } from '@ant-design/icons';

interface Props {
    other: Playlist | PlaylistTop;
}

const HeaderPlaylist = ({ other }: Props) => {
    let title;
    let display;

    if ('year' in other) {
        title = other.title +  ' ' + other.year;
        display = title;
    } else if (other.title === 'Liked Songs') {
        display = <HeartFilled />;
    }else {
        title = other.title;
        display = '';
    }

    return (
        <div className={'heade'} >
           <Card className={'CardPlaylistHeade'} bordered={false} style= {{background: `linear-gradient( #${other.color1} 0%, #${other.color2} 100%)`}}>
          <Card className={'CardPlaylistCoverMainPage'} bordered={false} style= {{background: `linear-gradient( #${other.color1} 0%, #${other.color2} 100%)`}}>       
          
            {display}
          </Card>
            <div className={'textHeader'} > 
              <h1>{title}</h1>
            </div>
          </Card>
        </div>
    );
};

export default HeaderPlaylist;
