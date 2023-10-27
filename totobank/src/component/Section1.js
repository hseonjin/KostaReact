import { Button } from 'reactstrap';
import React from 'react';

const Section1 = () => {
    return (
        <div style={{width:"100%"}}>
            <div className='section_left'>
                <div className='imgBox attachRight'>
                    <img src="/img/main-withdrawal.png" height="680px" width="480px"/>
                </div>
            </div>
            <div className='section_right'>
                <div className='textBox attachLeft'>
                    <span className='L-text'>모바일로 더 손쉬운 <br/>계좌개설, 간편한 이체</span>
                    <span className='S-text'>인증서, OTP 없이 계좌 개설이 간편합니다.<br/>여러 건의 이체도 몇 번의 터치로 손쉽기 보낼 수 있습니다.</span><br/>
                    <Button color="light" size="sm">토토뱅크 입출력통장&gt;</Button>
                </div>
            </div>
        </div>
    );
};

export default Section1;