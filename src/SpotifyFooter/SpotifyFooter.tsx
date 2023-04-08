import { Button, Col, Row, Slider} from 'antd';
import React, { useEffect, useState } from 'react';
import { Image } from 'antd';
import './SpotifyFooterCss.css';
import { ArrowsAltOutlined, CaretRightOutlined, RetweetOutlined, StepBackwardOutlined, StepForwardOutlined } from '@ant-design/icons';

const SpotifyFooter = () => {
  
    const [inputValue, setInputValue] = useState(0.00);

    const onChange = (value: number) => {
        if (isNaN(value)) {
          return;
        }
        setInputValue(value);
      };

    return (
      
        <div >
            <Row justify="space-around" align="middle"> 
                <Col span={7}  >

                    <h1>[placeholer playlist]</h1>

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
                    max={1}
                    onChange={onChange}
                    value={typeof inputValue === 'number' ? inputValue : 0}
                    step={0.01}
                    className ="slide"
                    />

                <h1>[placeholer max]</h1>   
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
