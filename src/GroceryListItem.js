import React, {useState} from "react";

export default function GroceryListItem({item}) {
    const[bold, setBold] = useState(false);
    const[done, setDone] = useState(false);

    return (
        <li style={{textDecoration: done ? 'line-through' : 'none',
                fontWeight: bold ? 'bold' : 'normal',}}
            onMouseEnter={() => {
                setBold(true)
            }}
            onMouseLeave={() => {
                setBold(false)
            }}
            onClick={() => setDone(true)} >
            {item.name} : {item.quantity}</li>
    )
}

