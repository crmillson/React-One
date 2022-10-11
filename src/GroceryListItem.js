import React from "react";

export default class GroceryListItem extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            done:false,
            grocery: ["bananas", "spinach", "milk"]
        };
    }

    onListItemClick(){
        this.setState({done: !this.state.done});
    }
    onMouseIn(e){
        e.target.style.textDecoration = 'bold';
    }
    onMouseOut(e){
        e.target.style.textDecoration = '';
    }

    render() {
        let style = {textDecoration: this.state.done ? 'line-through' : 'none'}
        let grocery = this.state.grocery

        return <ul> {grocery.map(item => <li style={style} onMouseOver={() => this.onMouseIn} onMouseOut={()=>this.onMouseOut}  onClick={this.onListItemClick.bind(this)} > {item}</li>)} </ul>
    }
}