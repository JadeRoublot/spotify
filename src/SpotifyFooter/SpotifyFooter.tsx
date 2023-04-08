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
            <Row justify="center" align="middle"> 
                <Col span={8}>

                    <h1>hi</h1>

                </Col>
                <Col span={8}>
               
                    <StepBackwardOutlined className ="customSvg"/>

                    <Button  shape="circle">
                        <CaretRightOutlined />
                    </Button>

                    <StepForwardOutlined className ="customSvg"/>
                    <RetweetOutlined className ="customSvg"/>
           
                    <Slider
                        min={0}
                        max={20}
                        onChange={onChange}
                        value={typeof inputValue === 'number' ? inputValue : 0}
                        />
                </Col>

                <Col span={8}>

                    <h1>hi</h1>

                </Col>
            </Row>
            
           
        </div>
      
    );
};

export default SpotifyFooter;
