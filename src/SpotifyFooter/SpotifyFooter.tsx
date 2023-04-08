import { Button, Col, Row, Slider} from 'antd';
import React, { useEffect, useState } from 'react';

import './SpotifyFooterCss.css';
import { CaretRightOutlined, RetweetOutlined, StepBackwardOutlined, StepForwardOutlined } from '@ant-design/icons';

const SpotifyFooter = () => {
  
    const [inputValue, setInputValue] = useState(0);

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

                    <h1>hi</h1>

                </Col>
                <Col span={10} >
                <div className ="centerFooter">
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
                    min={0}
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

                    <h1>hi</h1>

                </Col>
            </Row>
            
           
        </div>
      
    );
};

export default SpotifyFooter;
