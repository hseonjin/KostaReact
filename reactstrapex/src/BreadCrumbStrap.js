import { Breadcrumb, BreadcrumbItem } from "reactstrap";

function BreadCrumbStrap() {
    return (
        <>
        <Breadcrumb tab="nav" listTag="div">
            <BreadcrumbItem tag="a" href="#top" >go Top</BreadcrumbItem>
            <BreadcrumbItem tag="a" href="#bottom" >go Bottom</BreadcrumbItem>
            <BreadcrumbItem active>data</BreadcrumbItem>
        </Breadcrumb>
        <div id="bottom" style={{marginTop:"1000px"}}>
            <span>bottom</span>           
        </div>

        </>
    )
}

export default BreadCrumbStrap;