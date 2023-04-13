import { Input, Modal, Select, Table } from 'antd';
import React, { useEffect, useState } from 'react';
import { Header } from 'antd/es/layout/layout';
import Data from '../static/data.json';
import Columns from '../static/columns.json';
import './PlaylistPageCss.css';
import HeaderPlaylist from './Header';
import { useParams } from 'react-router-dom';
import { Music, Playlist, PlaylistTop, setDisplayMenu, setMusicPlayed, setMusicToAdd } from '../Slices/playlistsSlice';
import { useDispatch, useSelector } from 'react-redux';
import { State } from '../store';
import { SearchOutlined } from '@ant-design/icons';
import MenuPlaylist from '../MenuPlaylist';

const PlaylistPage = () => {
    const dispatch = useDispatch();
    const param = useParams();
    const data = Data;
    const columns = Columns;
    

    const playlists: Playlist[] = useSelector((state: State) => state.spotify.playlist);
    const playlistsTop: PlaylistTop[] = useSelector((state: State) => state.spotify.playlistTop);
    
    const [ search, setSearch] = useState<string>();
    const [sortOption, setSortOption] = useState<string>();
    
    const handlePlaylistselect = () : Playlist | PlaylistTop => {

        let playlist:Playlist | undefined = playlists.find((playlist:Playlist) => playlist.id === '/Playlist/' + param.id);
        let playlistTop:PlaylistTop | undefined = playlistsTop.find((playlistTop:PlaylistTop) => playlistTop.id === '/Top50/' + param.year);
        if (playlist === undefined) {
            
            if (playlistTop !== undefined) {
                return playlistTop;
            }

        } else {
            return playlist;
        }
        throw new Error('Neither playlist nor playlistTop exists');
    }

    let playlistSelect = handlePlaylistselect();

    const handleOnChangeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value);
    };

    const handleSortedChange = ( newSortedOption: string) => {
        setSortOption(newSortedOption);
    };

    const Sorting = (music : Music[]) => {
        let musicSorted: Music[] = [...music];
        switch(sortOption) {
            case "title":
                musicSorted.sort((a,b) => (a.title > b.title) ? 1 : ((b.title > a.title) ? -1 : 0));
            break;;
            case "genre":
                musicSorted.sort((a,b) => (a.genre > b.genre) ? 1 : ((b.genre > a.genre) ? -1 : 0));
                break;;
            case "year":
               musicSorted.sort((a, b) => a.year - b.year);
                break;;
            case "duration":
                musicSorted.sort((a, b) => a.duration - b.duration);
                break;;
            case "popularity":
                musicSorted.sort((a, b) => a.popularity - b.popularity);
                break;;
                
        }

       
        return  musicSorted;
    };

    const Searching = (music : Music[]) => {
        let musicSearch : Music[] = [...music];
        
        musicSearch = musicSearch.filter((music) =>
            music.title.startsWith(search!) || 
            music.title.toLowerCase().startsWith(search!)||
            music.genre.startsWith(search!) ||
            music.genre.toLowerCase().startsWith(search!) ||
            music.artist.startsWith(search!) ||
            music.artist.toLowerCase().startsWith(search!) ||
            music.year.toString().startsWith(search!) ||
            music.popularity.toString().startsWith(search!) ||
            music.duration.toString().startsWith(search!));

        return musicSearch;
    };

    const getMusic = (search: string | undefined , sortOption: string | undefined ,) => {
        
        let musicOfPlaylist = playlistSelect.music;
        
        if (search !== undefined) {

            musicOfPlaylist = Searching(musicOfPlaylist);

        }
        
        if (sortOption !== undefined) {

            musicOfPlaylist = Sorting(musicOfPlaylist);

        }

            return musicOfPlaylist;
        
     
    };

    return (
      
           <div className="app">
              <HeaderPlaylist other = {playlistSelect}/>
                <div className="upper">
                    <div className="body">
                        <Input className={'inputPlaylist'} prefix = {<SearchOutlined />} placeholder="Artists, songs, or podcasts" value={search} onChange={handleOnChangeSearch}/>
                        <Select
                            placeholder={"Custom order"}
                            className={'selectPlaylist'}
                            onChange={handleSortedChange}
                            options={[
                                { value: 'title', label: 'Title' },
                                { value: 'genre', label: 'Genre' },
                                { value: 'year', label: 'Year' },
                                { value: 'duration', label: 'Duration' },
                                { value: 'popularity', label: 'Popularity' },
                            ]}
                        />
                        <Table  bordered={false} 
                        dataSource={getMusic( search , sortOption )} 
                        columns={columns} 
                        pagination={false}
                        onRow={(record, rowIndex) => {
                            return {
                              onClick: (event) => {
                               
                                dispatch(setMusicPlayed([playlistSelect , record]))
                            }, 

                                onDoubleClick: (event) => { 

                                    dispatch(setDisplayMenu(true))
                                    dispatch(setMusicToAdd(record))
                                    
                                }, 
                             
                            };
                          }}/>
                    </div>
                 </div>
                 <MenuPlaylist />
            </div>
      
    );
};

export default PlaylistPage;
