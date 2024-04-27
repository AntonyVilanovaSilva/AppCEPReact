import './style.css';

function Button(props) {
    const classeButton = " Btn " + props.cor;
    return (
      <div className={classeButton} onClick={props.onClick} >
      {props.b}
      </div>
    );
  }
  
  export default Button;
  
  
