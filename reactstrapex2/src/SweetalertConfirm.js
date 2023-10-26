import { Button } from "reactstrap";
import Swal from "sweetalert2";

const SweetalertConfirm = () => {
    const deleteAlert = (flag, position) => {
        Swal.fire({
            title:"정말 삭제하시겠습니까?", icon:'question', showCancelButton:true,confirmButtonColor:'#4B088A', cancelButtonColor:"#01DF01"
        }).then((res) => {
            if(res.value) {
                document.getElementById("deleteId").remove();
                Swal.fire("Deleted", "삭제완료", "success");
            }
        })
    }
    return (
        <div>
            <h1 id="deleteId">삭제대상</h1>
            <Button onClick={deleteAlert}>삭제</Button>
        </div>
    );
};

export default SweetalertConfirm;