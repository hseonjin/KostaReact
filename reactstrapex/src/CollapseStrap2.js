import React, { useState } from 'react';
import { Button, Card, CardBody, Collapse } from 'reactstrap';

function CollapseStrap2() {
    const [open, setOpen] = useState(false);
    const [status, setStatus] = useState("Closed");
    const [idx, setIdx] = useState(0);
    const contents = [
        "음~맛있다 마트 다녀오셨어요?",
        "아니 영기 엄마가 텃밭에서 고구마 호박을..",
        "호박 고구마예요.",
        "그래! 호구! 아니..",
        "호홍 호구마요? 호.박.고..",
        "호박 고구마!! 호박 고구마!!! 호박 고구마 인제 됐냐?"
    ]

    const entering = () => {
        setStatus("Opening");
        if(idx===contents.length-1) setIdx(0);
        else setIdx(idx+1);
    }
    const entered = () => {
        setStatus("Opened")
    }
    const exiting = () => {
        setStatus("Closing");
    }
    const exited = () => {
        setStatus("Closed")
    }
    return (
        <>
            <Button onClick={()=>setOpen(!open)} style={{marginBottom:"10px"}}>Toggle</Button>
            <h5>Current state: {status}</h5>
            <Collapse isOpen={open} onEntering={entering} onEntered={entered} onExiting={exiting} onExited={exited}>
                <Card>
                    <CardBody>
                        {contents[idx]}
                    </CardBody>
                </Card>

            </Collapse> 
        </>
    );
};

export default CollapseStrap2;