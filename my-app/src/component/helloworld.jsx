import React,{Component} from "react";

 class HelloWorld extends Component{
     constructor(props){
         super(props);
         this.state = {
             str: 'Hello World~  This is Bruce Wong',
         };
     }
     render() {
         return (
             <div style={{fontSize: 20 }}>{this.state.str}</div>
         )
     }
 }

 export default HelloWorld