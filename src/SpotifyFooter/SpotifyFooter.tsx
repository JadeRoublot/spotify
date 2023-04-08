import { Button, Col, Row, Slider} from 'antd';
import React, { useEffect, useState } from 'react';

import './SpotifyFooterCss.css';
import { CaretRightOutlined, RetweetOutlined, StepBackwardOutlined, StepForwardOutlined } from '@ant-design/icons';

const SpotifyFooter = () => {
  
    const [inputValue, setInputValue] = useState(0);

    const onChange = (newValue: number) => {
      setInputValue(newValue);
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

                    <Button  shape="circle" className ="button">
                        <CaretRightOutlined />
                    </Button>

                    <StepForwardOutlined className ="customSvg"/>
                    <RetweetOutlined className ="customSvg"/>
                </div>
                    <Slider
                        min={0}
                        max={6}
                        onChange={onChange}
                        value={typeof inputValue === 'number' ? inputValue : 0}
                        className ="slide"
                        />
                </Col>

                <Col span={7}>

                    <h1>hi</h1>

                </Col>
            </Row>
            
           
        </div>
      
    );
};

export default SpotifyFooter;
