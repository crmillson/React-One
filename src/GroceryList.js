import React from "react";
import GroceryListItem from "./GroceryListItem";

export default class GroceryList extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            grocery: [{name: "bananas", quantity: "bunch"}, {name: "spinach", quantity: "2 lbs"}, {name:"milk", quantity: "1.5 gallons"}]
        };
    }

    render() {
        let grocery = this.state.grocery
        return <ul> {grocery.map(item => <GroceryListItem item = {item}/> )} </ul>
    }
}