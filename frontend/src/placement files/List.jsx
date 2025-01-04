import { Component } from "react";

class List extends Component {
  render() {
    return (
    <>
        <ol>
            <li>Fruits</li>
            <ul>
                <li>Apple</li>
                <li>Banana</li>
                <li>Orange</li>
            </ul>
            <li>Vegetables</li>
            <ul>
                <li>I. Carrot</li>
                <li>II. Tomato</li>
                <li>III. Spinach</li>
            </ul>
            <li>Birds</li>
            <ul className="hash">
                <li>Crow</li>
                <li>Sparrow</li>
                <li>Peacock</li>
            </ul>
        </ol>
    </>
    );
  }
}

export default List;