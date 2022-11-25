import {useState, Component} from "react";

export const Counter = (props) => {
  const {initialCount} = props;
  const [count, setCount] = useState(initialCount);

  return (
    <div>
      <h1>{count}</h1>

      <button onClick={() => setCount((prevCount) => prevCount - 1)}>-</button>
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>+</button>
    </div>
  )
};

/*export class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: props.initialCount
    };
  }

  componentDidMount() {
    document.title = `Click count ${this.state.count}`;
  }

  componentDidUpdate() {
    document.title = `Click count ${this.state.count}`;
  }

  render() {
    return (
      <div>
        <h1>{this.state.count}</h1>

        <button onClick={() => this.setState({ count: this.state.count - 1 })}>-</button>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>+</button>
      </div>
    );
  }
}*/
