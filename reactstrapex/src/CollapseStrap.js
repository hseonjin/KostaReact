import React from 'react';
import { Button, Card, CardBody, UncontrolledCollapse } from 'reactstrap';

function CollapseStrap() {
    return (
        <>
            <Button color="warning" id="toggle">펼치기/접기</Button>
            <UncontrolledCollapse toggler='#toggle'>
                {/* 카드가 노출되지 않을 때는 자리를 차지하지 않음 -> display=none */}
                <Card style={{width:"300px", margin:"0 auto"}}>
                    <CardBody>
                    온 가족이 어깨에 이불을 두르고 옹기종기 모여 앉아 밤참을 나눠 먹던 겨울밤에 잘 어울리는 신토불이 야식 고구마! 식이섬유소가 풍부한 고구마는 영양 간식으로 손색이 없답니다. 냠냠 맛도리
                    </CardBody>
                </Card>
            </UncontrolledCollapse>
        </>
    );
};

export default CollapseStrap;