import {ListGroupItem, ListGroup, Badge, ListGroupItemHeading, ListGroupItemText} from 'reactstrap';

function ListGroupStrap() {
    return (
        <>
            <ListGroup>
              <ListGroupItem className="justify-content-between">Cras justo odio<Badge pill>14</Badge></ListGroupItem>
              <ListGroupItem className="justify-content-between">Dapibus ac facilisis in</ListGroupItem>
              <ListGroupItem className="justify-content-between">Morbi leo risus</ListGroupItem>
            </ListGroup>
            <br/>
            <ListGroup>
              <ListGroupItem className="justify-content-between" tag="a" href="#">Cras justo odio</ListGroupItem>
              <ListGroupItem className="justify-content-between" tag="a" href="#">호홍 호구마요? 호.박.고... 호박고구마 호박고구마!!!!</ListGroupItem>
              <ListGroupItem className="justify-content-between" tag="a" href="#">Morbi leo risus</ListGroupItem>
            </ListGroup>
            <br/>
            <ListGroup>
              <ListGroupItem>
                <ListGroupItemHeading>미국 메인주 총기 난사…"최소 22명 사망, 50명 이상 부상"</ListGroupItemHeading>
                <ListGroupItemText>미국 메인주 루이스턴에서 현지 시간 25일 밤 총기 난사로 최소 22명이 숨지고 50명 이상이 다쳤다고 폭스뉴스 등 현지 언론이 보도했습니다.중상자가 많아 사망자는 더 늘어날 수 있다고 덧붙였습니다.</ListGroupItemText>
              </ListGroupItem>
              <ListGroupItem>
                <ListGroupItemHeading>'인하대 추락사' 성폭행범, 준강간치사죄 징역 20년 확정</ListGroupItemHeading>
                <ListGroupItemText>대학 캠퍼스에서 또래 여학생을 성폭행하려다 건물에서 떨어뜨려 살해한 혐의로 기소된 20대 남성에 징역 20년이 확정됐습니다.</ListGroupItemText>
              </ListGroupItem>
            </ListGroup>
        </>
    );
};

export default ListGroupStrap;