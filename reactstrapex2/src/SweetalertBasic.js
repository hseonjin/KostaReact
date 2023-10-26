import { Button } from "reactstrap";
import Swal from "sweetalert2";
 
const SweetalertBasic = () => {
    const confirm = () => {
        Swal.fire('삭제했습니다.').then(result=> {
            console.log(result.value);
        })
    }
    return (
        <div>
            <Button onClick={confirm}>확인</Button>
        </div>
    );
};

export default SweetalertBasic;