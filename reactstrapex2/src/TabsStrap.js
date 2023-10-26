import { useState } from "react";
import {Button, Card, CardText,CardTitle, Col, Nav, NavItem, NavLink, Row, TabContent, TabPane} from "reactstrap";
import classnames from 'classnames';

const TabsStrap = () => {
    const [activeTab, setActiveTab] = useState(false);
  return (
    <div style={{ width: "800px" }}>
      <Nav tabs>
        <NavItem>
          {/* className="active"인데, activeTab이 1일 떄만 얘를 active로 설정하겠다 */}
          <NavLink
            className={classnames({ active: activeTab === "1" })}
            onClick={() => setActiveTab("1")}
          >
            tab1
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === "2" })}
            onClick={() => setActiveTab("2")}
          >
            tab2
          </NavLink>
        </NavItem>
      </Nav>
      <TabContent activeTab={activeTab}>
        <TabPane tabId={"1"}>
          <Row>
            <Col sm="12">
              <h4>Tab 1 Contents</h4>
            </Col>
          </Row>
        </TabPane>
        <TabPane tabId={"2"}>
          <Row>
            <Col sm="6">
              <Card body>
                <CardTitle>제목 하나</CardTitle>
                <CardText>카드 내용입니다</CardText>
                <Button>자세히</Button>
              </Card>
            </Col>
            <Col sm="6">
              <Card body>
                <CardTitle>제목 둘</CardTitle>
                <CardText>카드 내용입니다</CardText>
                <Button>자세히</Button>
              </Card>
            </Col>
          </Row>
        </TabPane>
      </TabContent>
    </div>
  );
};

export default TabsStrap;
