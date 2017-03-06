import React from "react";
import { render } from "react-dom";
import Message from "./components/Message";
import Counter from "./components/Counter";

class App extends React.Component {

  render() {
    const message = "I'm a child component!";
    return (
      <div>
        <h1>Hello from React!</h1>
        <Message message={message} />
        <Counter />
      </div>
    )
  }

}

render(<App />, document.getElementById("root"));
