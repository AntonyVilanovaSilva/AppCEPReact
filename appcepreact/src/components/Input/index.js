import './style.css';

function Input(props) {
    return (
      <div className="Input">
       <input onChange={props.onChange} value={props.value}/>
      </div>
    );
  }
  
  export default Input;
  