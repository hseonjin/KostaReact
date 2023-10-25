import { Badge, Button } from "reactstrap";

function ButtonStrap() {
    return (
        <>  
            <h1>PRODUCT NAME <Badge color="secondary">hit</Badge></h1>
            <Button color="success" outline>Accessor <Badge color="dark">4</Badge></Button>
            <Badge color="danger" pill>pill</Badge>
            <Badge href="http://naver.com" color="warning">GoLink</Badge>
        </>
    )
}

export default ButtonStrap;