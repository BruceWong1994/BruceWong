import React,{Component} from "react";

 class HelloWorld extends Component{
     constructor(props){
         super(props);
         this.state = {
             welcomeTitle: 'Hi there!  This is Bruce Wong~',
         };
     }
     render() {
         return (
            <>
                <p style={{fontSize: 30, marginBottom: 20}}>首页</p>
                <div style={{fontSize: 20 }}>{this.state.welcomeTitle}</div>
            </>
         )
     }
 }

 export default HelloWorld