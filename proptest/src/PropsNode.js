function PropsNode(props) {
  return (
    <>
      <h1>태그시작</h1>
      {props.children}
      <h1>태그끝</h1>
    </>
  );
}

export default PropsNode;
