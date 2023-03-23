import './Container.css';
const  Container = (props) => {
  return (
    <div className='container main-container'>
      <h1>{props.children}</h1>
    </div>
  );
}
export default Container;