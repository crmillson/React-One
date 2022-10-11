import React from "react";

export default class GroceryListItem extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            done: false,
            bold: false
        };
    }

    onListItemClick(){
        this.setState({done: !this.state.done});
    }

    render() {
        let style = {
            textDecoration: this.state.done ? 'line-through' : 'none',
            fontWeight: this.state.bold ? 'bold' : 'none'
        }

        return (
            <li style={style}
                onMouseEnter={() => {
                    this.setState({bold:true})
                }}
                onMouseLeave={() => {
                    this.setState({bold:false})
                }}
                onClick={this.onListItemClick.bind(this)} >
                {this.props.item.name} : {this.props.item.quantity}</li>
        )
    }
}
