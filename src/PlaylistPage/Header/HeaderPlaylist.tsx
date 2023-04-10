import { Card, Input, Modal, Table } from 'antd';
import React, { useEffect, useState } from 'react';
import { Header } from 'antd/es/layout/layout';

import './HeaderPlaylistCss.css';
import { Playlist, PlaylistTop } from '../../Slices/playlistsSlice';

interface Props {
    other: Playlist | PlaylistTop;
}

const HeaderPlaylist = ({ other }: Props) => {
    let title;

    if ('year' in other) {
        title = other.title +  ' ' + other.year;
    } else {
        title = other.title;
    }

    return (
        <div className={'heade'} >
           <Card className={'CardPlaylistHeade'} bordered={false} style= {{background: `linear-gradient( #${other.color1} 0%, #${other.color2} 100%)`}}>
          <Card className={'CardPlaylistCoverMainPage'} bordered={false} style= {{background: `linear-gradient( #${other.color1} 0%, #${other.color2} 100%)`}}>       
          
          
          </Card>
            <div className={'textHeader'} > 
              <h1>{title}</h1>
            </div>
          </Card>
        </div>
    );
};

export default HeaderPlaylist;
