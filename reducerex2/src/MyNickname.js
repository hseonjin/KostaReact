
// dispatch 파일 분리
const MyNickname = ({info, dispatch}) => {
    return (
        <>
            <label>{info.nickname}</label>&nbsp;&nbsp;&nbsp;
            <input type="text" onInput={(e) => dispatch({type:"CHANGE_NICKNAME", value:e.target.value})} />
        </>
    );
};

export default MyNickname;