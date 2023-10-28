import {Button, Col, Form, FormGroup, Input, Label} from 'reactstrap';

const DetailForm = () => {
    const style = {width:"600px", margin:"20px auto", padding:"30px", border:"1px solid #ddd0d0", borderRadius:"10px"}
    const goToList = () => {
        window.location.href="/boardList";
    };
    const goToModify = () => {
        window.location.href="/writeForm";
    };

    return (
      <div style={{width:"800px", margin:"30px auto"}}>
      <h3>게시판글상세</h3>
            <div style={style}>
      <Form>
        <FormGroup row>
          <Label for="writer" sm={2}>글쓴이</Label>
          <Col sm={10}>
            <Input type="text" name="writer" id="writer" />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="title" sm={2}>제 목</Label>
          <Col sm={10}>
            <Input type="text" name="title" id="title" />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="content" sm={2}>내 용</Label>
          <Col sm={10}>
            <Input type="textarea" name="content" id="content" rows="10"/>
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="file" sm={2}>이미지</Label>
            <img src="/logo192.png" alt="" />
        </FormGroup>
        <Button onClick={goToModify} color="secondary">수정</Button>&nbsp;&nbsp;&nbsp;
        <Button onClick={goToList} color="secondary">게시판 목록</Button>
      </Form>
    </div>
        </div>
    );
};

export default DetailForm;