import datatype from "prop-types";

let PropsRequired = ({ ReactString, ReactVersion }) => {
  return (
    <>
      {ReactString} {ReactVersion}
    </>
  );
};

// 부모 컴포넌트에서 이름과 값을 지정해주지 않은 경우에는 자식 컴포넌트에서 이름을 입력하더라도 값을 출력하지 않음
// 반드시 출력해주어야 하는 아이를 지정하기 위해 현재 파일로 예시를 들어보는 것 -> isRequired 사용
PropsRequired.propTypes = {
  ReactString: datatype.string.isRequired,
};

PropsRequired.defaultProps = {
  ReactString: "리액트",
  ReactVersion: 123,
};

export default PropsRequired;
