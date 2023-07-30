import React from 'react'

class AboutClass extends React.Component {

    //this is how we create state variables
    constructor(props){
        super(props);
        this.state = {
            count : 0
        };
        console.log("constructor")
    }
    render(){
        console.log("render")
        return(
            <div>
                <h1>Hello I am Class Component {this.props.name} </h1>
                <h1> Counter is : {this.state.count}</h1>
                <button onClick={()=> this.setState({
                    count: this.state.count+1,
                })}> Button </button>
            </div>
        )
    }

    componentDidMount(){
        console.log('component did mount')
    }
    
    componentDidUpdate(){
        console.log('component did update')
    }
}

export default AboutClass