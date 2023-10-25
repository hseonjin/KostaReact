import React from 'react';
import { Button, Card, CardBody, CardImg, CardSubtitle, CardText, CardTitle } from 'reactstrap';

function CardStrap(){
    return (
        <div>
            <Card style={{width:"300px"}}>
                <CardImg src="kk.jpg" alt="logo" style={{width:"260px", margin:"20px"}}></CardImg>
                <CardBody>
                    <CardTitle>React</CardTitle>
                    <CardSubtitle>front component</CardSubtitle>
                    <CardText>React is a front component</CardText>
                    <Button>조회</Button>
                </CardBody>
            </Card>
            <br/>
            <Card body style={{width:"300px"}} className="text-center">
                <CardTitle>카드 제목</CardTitle>
                <CardText>카드 내용</CardText>
                <Button>선택</Button>
            </Card>
        </div>
    );
};

export default CardStrap;