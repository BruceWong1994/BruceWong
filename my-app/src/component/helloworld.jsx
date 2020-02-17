import React,{Component} from "react";

 class HelloWorld extends Component{
     constructor(props){
         super(props);
         this.state = {
             str: 'Hi! Bruce Wong~',
         };
     }
     render() {
         const { str } = this.state;
         return (
             <div style={{marginLeft: 30, fontSize: 30, color: this.props.color}}>{str}</div>
         )
     }
 }

 export default HelloWorld