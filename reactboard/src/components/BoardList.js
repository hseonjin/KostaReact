import React, { useState } from 'react';
import { Button, Dropdown, DropdownItem, DropdownMenu, DropdownToggle, Input, Pagination, PaginationItem, PaginationLink, Table } from 'reactstrap';
import {Link} from 'react-router-dom';

const BoardList = () => {
    const [open, setOpen] = useState(false);
    const toggle = () => {setOpen(!open)};

    const goToWrite = () => {window.location.href="/writeForm"};
    const goToDetail = () => {window.location.href="/detailForm"};

    const data = [
      { id: 1, title: '제목1', writer: '가길동', date: '2023-10-01', views: 5 },
      { id: 2, title: '제목2', writer: '나길동', date: '2023-10-02', views: 4 },
      { id: 3, title: '제목3', writer: '다길동', date: '2023-10-03', views: 1 },
      { id: 4, title: '제목4', writer: '라길동', date: '2023-10-04', views: 2 },
      { id: 5, title: '제목5', writer: '마길동', date: '2023-10-05', views: 7 },
    ];

    return (
      <div style={{width:"800px", margin:"30px auto"}}>
      <div>
          <h3>게시판글 목록</h3>
          <div className="d-flex p-5">
            <Dropdown isOpen={open} toggle={toggle} id="dropdown-title">
              <DropdownToggle caret color="none" >제목&nbsp;&nbsp;&nbsp;</DropdownToggle>
              <DropdownMenu>
                <DropdownItem header>선택하세요</DropdownItem>
                <DropdownItem>제목</DropdownItem>
                <DropdownItem>작성자</DropdownItem>
              </DropdownMenu>
            </Dropdown>
            <Input style={{ width: "40%", margin:"0 20px" }} />
            <Button color="secondary">검색</Button>
            <Button color="success" onClick={goToWrite} className='writeBtn'>글쓰기</Button>
          </div>
          <div>
            <Table bordered>
              <thead>
                <tr>
                  <th>번호</th>
                  <th>제목</th>
                  <th>작성자</th>
                  <th>날짜</th>
                  <th>조회수</th>
                  <th>삭제</th>
                </tr>
              </thead>
              <tbody>
              {data.map((i) => (
                  <tr key={i.id}>
                    <td>{i.id}</td>
                    <td onClick={goToDetail}>{i.title}</td>
                    <td>{i.writer}</td>
                    <td>{i.date}</td>
                    <td>{i.views}</td>
                    <td><Button color="secondary">삭제</Button></td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        </div>

        <Pagination aria-label="Page navigation example" className='page'>
          <PaginationItem disabled>
            <PaginationLink href="#" previous />
          </PaginationItem>
          <PaginationItem active>
            <PaginationLink href="#">1</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">2</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">3</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">4</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">5</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#" next />
          </PaginationItem>
        </Pagination>
      </div>
    );
};

export default BoardList;