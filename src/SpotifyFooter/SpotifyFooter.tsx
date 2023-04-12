import { Button, Card, Col, Row, Slider} from 'antd';
import React, { useEffect, useState } from 'react';
import { Image } from 'antd';
import './SpotifyFooterCss.css';
import { ArrowsAltOutlined, CaretRightOutlined, HeartFilled, RetweetOutlined, StepBackwardOutlined, StepForwardOutlined } from '@ant-design/icons';
import { State } from '../store';
import { useSelector } from 'react-redux';
import { MusicPlayed } from '../Slices/playlistsSlice';

const SpotifyFooter = () => {
  
    const [inputValue, setInputValue] = useState(0.00);
    const playingSong: MusicPlayed = useSelector((state: State) => state.spotify.musicPlayed);

    let title;
    let display;

    if ('year' in playingSong.playlist) {
        title = playingSong.playlist.title +  ' ' + playingSong.playlist.year;
        display = title;
    } else if (playingSong.playlist.title === 'Liked Songs') {
        title = playingSong.playlist.title;
        display = <HeartFilled />;
    }else {
        title = playingSong.playlist.title;
        display = '';
    }

    const onChange = (value: number) => {
        if (isNaN(value)) {
          return;
        }
        setInputValue(value);
      };

    return (
      
        <div >
            <Row justify="space-around" align="middle"> 
                <Col span={7} className={'colMusicPlayedFooter'} >

                <Card className={'CoverPlaylistFooter'} bordered={false} style={{
                        background: `linear-gradient( #${playingSong.playlist.color1} 0%, #${playingSong.playlist.color2} 100%)`,
                        }}>
                            <h1 className={'titleInCoverFooter'}>{display}</h1>
                </Card>

                <div>
                    <h1 className={'titleMusicFooter'}>{playingSong.music.title}</h1>
                    <h1 className={'artistMusicFooter'}>{playingSong.music.artist}</h1>
                </div>
                
                </Col>
                <Col span={10} >
                <div className ="centerFooter">
                <Image src="img/random.png" preview = {false} className ="iconFooter"/>
                    <StepBackwardOutlined className ="customSvg"/>

                    <Button  shape="circle" className ="button" size = {'large'}>
                        <CaretRightOutlined />
                    </Button>

                    <StepForwardOutlined className ="customSvg"/>
                    <RetweetOutlined className ="customSvg"/>
                </div>
            <div className ="centerSlider">
                <h1>{inputValue}</h1>
                <Slider
                    min={0.00}
                    max={playingSong.music.duration}
                    onChange={onChange}
                    value={typeof inputValue === 'number' ? inputValue : 0}
                    step={0.01}
                    className ="slide"
                    />

                <h1>{playingSong.music.duration}</h1>   
            </div>   
                </Col>

                <Col span={7}>
                    <div className ="rightFooter">
                    <Image src="img/interfaceLeft.jpg" preview = {false} className ="imageFooter"/>
                    <ArrowsAltOutlined className ="customSvg"/>
                        
                    </div>
                </Col>
            </Row>
            
           
        </div>
      
    );
};

export default SpotifyFooter;
