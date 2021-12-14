import React from "react";

export class ShoppingList extends React.Component {
    render() {
        return (
            <div className="shopping-list">
                <h1>Shopping List for {this.props.name1}</h1>
                <ul>
                    <li>Instagram</li>
                    <li>WhatsApp</li>
                    <li>Oculus</li>
                </ul>
            </div>
        );
    }
}


export function ShoppingList2(props)
{
    return (
        <div className="shopping-list">
            <h3>Shopping List for {props.name1}</h3>
            <ul>
                <li>Instagram2</li>
                <li>WhatsApp2</li>
                <li>Oculus2</li>
            </ul>
        </div>
    )
}

