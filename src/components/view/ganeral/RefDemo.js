import React from 'react';

class RefDemo extends React.Component {
    constructor(props) {
        super()
        this.state = {type:'desktop'};
        this.inputRef  = React.createRef();
        this.cbRef = null;
        this.setCbRef = element => {
            this.cbRef = element;
        }   
      }
      componentDidMount(){
        this.inputRef.current.focus();
        if(this.cbRef){
            this.cbRef.focus();
        }
          console.log(this.inputRef);
      }
    render() {
        return(
            <div>with ref variable
                <input type="text" ref={this.inputRef}/>
                with ref calbackFunction
                <input type="text" ref={this.setCbRef}/>
            </div>
          )
    }
}
export default RefDemo