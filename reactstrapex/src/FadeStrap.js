import React, { useState } from 'react';
import { Button, Fade } from 'reactstrap';

function FadeStrap() {
    const [fadeIn, setFadeIn] = useState(true);
    const fadeStyle = {width:"300px", margin:"2px auto", border:"solid gray 1px", padding:"5px"};
    return (
        <>
            <Button color="success" onClick={()=>setFadeIn(!fadeIn)}>FadeIn</Button>
            {/* UncontrolledCollapse와 달리 보이지 않는 경우에도 영역을 차지하고 있음 */}
            <Fade in={fadeIn} tag="p" style={fadeStyle}>
            온 가족이 어깨에 이불을 두르고 옹기종기 모여 앉아 밤참을 나눠 먹던 겨울밤에 잘 어울리는 신토불이 야식 고구마! 식이섬유소가 풍부한 고구마는 영양 간식으로 손색이 없답니다. 냠냠 맛도리
            </Fade>
            <p>제목</p>
        </>
    );
};

export default FadeStrap;