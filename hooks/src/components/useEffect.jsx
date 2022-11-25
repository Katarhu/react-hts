import {useState, Component, useEffect} from "react";

export const Counter = (props) => {
  const {initialCount} = props;
  const [count, setCount] = useState(initialCount);

  useEffect(() => {

    document.title = `Click count ${count}`;
  }, [count]);

  return (
    <div>
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
    document.title = `Fist render Click count ${this.state.count}`;
  }

  componentDidUpdate() {
    document.title = `Click count ${this.state.count}`;
  }

  render() {
    return (
      <div>
        <button onClick={() => this.setState({ count: this.state.count - 1 })}>-</button>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>+</button>
      </div>
    );
  }
}*/
