import React from 'react';
import { Button, Col, Form, FormGroup, FormText, Input, Label } from 'reactstrap';

function FormStrap() {
    return (
        <>
        <Form style={{margin:"10px auto", width:"800px"}}>
            <FormGroup row>
                <Label for="examEmail" sm={2}>Email</Label>
                <Col sm={10}>
                    <Input type="email" name="email" id="examEmail" placeholder="email"/>
                </Col>
            </FormGroup>
            <FormGroup row>
                <Label for="examPassword" sm={2}>Password</Label>
                <Col sm={10}>
                    <Input type="password" name="password" id="examPassword" placeholder="password" />
                </Col>
            </FormGroup>
            <FormGroup row>
                <Label for="exaSelect" sm={2}>Select</Label>
                <Col sm={10}>
                <Input type="select" name="select" id="examSelect">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                </Input>
                </Col>
            </FormGroup>
            <FormGroup row>
                <Label for="examText" sm={2}>Text Area</Label>
                <Col sm={10}>
                <Input type="textarea" name="text" id="examText"/>
                </Col>
            </FormGroup>
            <FormGroup row>
                <Label for="examFile" sm={2}>File</Label>
                <Col sm={10}>
                <Input type="file" name="file" id="examFile"/>
                </Col>
                <FormText color="muted">
                    This is some placeholder bolck-level help text for the above input.
                    It's a bit lighter and easily wraps to a new line.
                </FormText>
            </FormGroup>
            <FormGroup tag="fildset" row>
                <legend>Radio Buttons</legend>
                <FormGroup check>
                    <Label check>
                        <Input type="radio" name="radio1"/>{' '}
                        Option one is this and that-be sure to include why it's great
                    </Label>
                </FormGroup>
                <FormGroup check>
                    <Label check>
                        <Input type="radio" name="radio1"/>{' '}
                        Option two can be comethis else and selecting it will deslect option one
                    </Label>
                </FormGroup>
                <FormGroup check>
                    <Label check>
                        <Input type="radio" name="radio1" disabled/>{' '}
                        Option three is disabled
                    </Label>
                </FormGroup>
                <FormGroup check>
                    <Label check>
                        <Input type="checkbox"/>{' '}
                        Check me out
                    </Label>
                </FormGroup>
            </FormGroup>
            <Button>Submit</Button>
        </Form>
        <br/><br/>
        <Form inline>
            <FormGroup className='mb-2 mr-sm-2 mb-sm-0'>
                <Label for="examEmail2" className="mr-sm-2 mb-sm-0">Email</Label>
                <Input type="email" name="email" id="examEmail2" placeholder="email"/>
            </FormGroup>
            <FormGroup className='mb-2 mr-sm-2 mb-sm-0'>
                <Label for="examPassword2" className="mr-sm-2">Password</Label>
                <Input type="password" name="password" id="examPassword2" placeholder="password" />
            </FormGroup>
        </Form>
        </>
    );
};

export default FormStrap;