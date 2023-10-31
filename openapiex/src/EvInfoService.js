import axios from "axios";
import React, { useEffect, useState } from "react";
import { Pagination, PaginationItem, PaginationLink, Table } from "reactstrap";

const EvInfoService = () => {
  const [evInfo, setEvInfo] = useState([]);

  const [pageInfo, setPageInfo] = useState({
    totalCount: 0,
    curPage: 0,
    perPage: 0,
    startPage: 0,
    endPage: 0,
  });

  const [pageBtn, setPageBtn] = useState([]);

  const reqApi = (page) => {
    axios
      .get(
        `https://api.odcloud.kr/api/EvInfoServiceV2/v1/getEvSearchList?page=${page}&perPage=10&serviceKey=pqjiZl5sL4DRPdIzyi9iYiLMgt%2Bu8nWOugT7q9BZYG4G021YOkaWQucOkf%2FxGxQ52P2cwmLpEYlvqPvVymh2Tg%3D%3D`
      )
      .then((res) => {
        const totalCount = res.data.totalCount;
        const curPage = res.data.page;
        const perPage = res.data.perPage;
        const allPage = Math.ceil(totalCount / perPage);
        const startPage = Math.floor((curPage - 1) / 10) * 10 + 1;
        const endPage = Math.min(allPage, startPage + 10 - 1);
        setPageInfo({ totalCount, curPage, perPage, allPage, startPage, endPage });
        setEvInfo(res.data.data);

        let btn = [];
        for (let i = startPage; i <= endPage; i++) {
          btn.push(i);
        }
        setPageBtn(btn);
      });
  };

  useEffect(() => {
    reqApi(1);
  }, []);

  return (
    <div style={{ margin: "30px auto", width: "1200px" }}>
      <Table bordered style={{ minHeight: "830px" }}>
        <tr>
          <th>충전소명</th>
          <th>주소</th>
          <th>위도</th>
          <th>경도</th>
          <th>충전기ID</th>
          <th>충전기타입</th>
          <th>충전방식</th>
          <th>충전기상태</th>
        </tr>
        {evInfo.map((info) => (
          <tr key={info.cpId}>
            <td>{info.csNm}</td>
            <td>{info.addr}</td>
            <td>{info.lat}</td>
            <td>{info.longi}</td>
            <td>{info.cpNm}</td>
            <td>{info.chargeTp===1?'완속':'급속'}</td>
            <td>{
                info.cpTp==1?'B타입(5핀)':
                info.cpTp==2?'C타입(5핀)':
                info.cpTp==3?'BC타입(5핀)':
                info.cpTp==4?'BC타입(7핀)':
                info.cpTp==5?'DC차데모':
                info.cpTp==6?'AC3상':
                info.cpTp==7?'DC콤보':
                info.cpTp==8?'DC차데모+DC콤보':
                info.cpTp==9?'DC차데모+AC3상':
                info.cpTp==10?'DC차데모+DC콤보':''
            }</td>
            <td>{
                info.cpStat==0?'상태확인불가':
                info.cpStat==1?'충전가능':
                info.cpStat==2?'충전중':
                info.cpStat==3?'고장/점검':
                info.cpStat==4?'통신장애':
                info.cpStat==5?'통신미연결':
                info.cpStat==9?'충전예약':''
            }</td>
          </tr>
        ))}
      </Table>
      <Pagination style={{ justifyContent: "center" }}>
        {pageInfo.curPage === 1 ? (
          <PaginationItem disabled>
            <PaginationLink previous disabled />
          </PaginationItem>
        ) : (
          <PaginationItem>
            <PaginationLink
              previous
              onClick={() => {
                reqApi(pageInfo.curPage - 1);
              }}
            />
          </PaginationItem>
        )}
        {pageBtn.map((i) => (
          <PaginationItem key={i} className={i===pageInfo.curPage?"active":""}>
            <PaginationLink onClick={() => reqApi(i)}>{i}</PaginationLink>
          </PaginationItem>
        ))}
        {pageInfo.curPage === pageInfo.allPage ? (
          <PaginationItem disabled>
            <PaginationLink next disabled />
          </PaginationItem>
        ) : (
            <PaginationItem>
            <PaginationLink
              next
              onClick={() => {
                reqApi(pageInfo.curPage + 1);
              }}
            />
          </PaginationItem>
        )}
        </Pagination>
    </div>
  );
};

export default EvInfoService;
