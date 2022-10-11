import React from "react";
import GroceryListItem from "./GroceryListItem";

export default class GroceryList extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            groceries: [{name: "bananas", quantity: "bunch"}, {name: "spinach", quantity: "2 lbs"}, {name:"milk", quantity: "1.5 gallons"}],
            newItem: {}
        };

    }

    addItem(){
        const groceries = [...this.state.groceries];
        groceries.push(this.state.newItem)
        const newItem = {}
    }

    render() {
        return <ul> {this.state.groceries.map(item => <GroceryListItem item = {item}/> )} </ul>
    }
}