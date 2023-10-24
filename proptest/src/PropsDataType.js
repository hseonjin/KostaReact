import datatype from "prop-types";
function PropsDataType(props) {
  let { String, Number, Boolean, Array, ObjectJson, Function } = props;
  return (
    <>
      <p>StringProps : {String}</p>
      <p>NumberProps : {Number}</p>
      <p>BooleanProps : {Boolean.toString()}</p>
      <p>ArrayProps : {Array.toString()}</p>
      <p>ObjectJsonProps : {JSON.stringify(ObjectJson)}</p>
      <p>FunctionProps : {Function}</p>
    </>
  );
}

// 각각의 데이터 타입을 명시적으로 지정 (복잡한 경우 데이터 타입을 인식하지 못할 경우를 대비)
PropsDataType.propTypes = {
  String: datatype.string,
  Number: datatype.number,
  Boolean: datatype.bool,
  Array: datatype.array,
  ObjectJson: datatype.object,
  Function: datatype.func,
};

export default PropsDataType;
