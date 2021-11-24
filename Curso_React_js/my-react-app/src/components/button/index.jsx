
import './style.css';
import {Component} from "react"

export class Button extends Component{
    render(){
        const {text,quandoClica}=this.props;
        const{disabled}=this.props;
        return(
          <button 
           className='button'   
           onClick={quandoClica}
           disabled={disabled}
          >
              {text}
          </button>
        )
    }
}