import { useState } from "react";
import { Button, Col, Form, FormGroup, Input, Label } from "reactstrap";

const WriteForm = () => {
  const style = {
    width: "600px",
    margin: "20px auto",
    padding: "30px",
    border: "1px solid #ddd0d0",
    borderRadius: "10px",
  };

  const [writer, setWriter] = useState("");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [file, setFile] = useState("");

  const reset = () => {
    setWriter(''); setTitle(''); setContent(''); setFile('');
  };
  const goToEdit = () => {
    window.location.href = "/boardList";
  };

  return (
    <div style={{width:"800px", margin:"30px auto"}}>
      <h3>게시판글등록</h3>
      <div style={style}>
        <Form>
          <FormGroup row>
            <Label for="writer" sm={4}>
              글쓴이
            </Label>
            <Col sm={8}>
              <Input type="text" name="writer" value={writer} onChange={e=>setWriter(e.target.value)} />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="title" sm={4}>
              제 목
            </Label>
            <Col sm={8}>
              <Input type="text" name="title" value={title} onChange={e=>setTitle(e.target.value)} />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="content" sm={4}>
              내 용
            </Label>
            <Col sm={8}>
              <Input type="textarea" name="content" rows="10" value={content} onChange={e=>setContent(e.target.value)}/>
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="content" sm={4}>
              이미지 파일 첨부
            </Label>
            <Col sm={8}>
            <Input type="file" value={file} onChange={e=>setFile(e.target.value)} />
            </Col>
          </FormGroup>
          <Button onClick={goToEdit} color="secondary">
            등록
          </Button>
          &nbsp;&nbsp;&nbsp;
          <Button onClick={reset} color="secondary">
            다시쓰기
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default WriteForm;
