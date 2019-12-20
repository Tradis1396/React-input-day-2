import React from "react";
import ReactDOM from "react-dom";
// import {App} from './App';

const List = props => (
  <ul>
    {props.list.map((data, index) => {
      return (
        <li key={index}>
          <p>{data}</p> <button onClick={() => props.del(index)}>delete</button>
        </li>
      );
    })}
  </ul>
);

class InputBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      word: ""
    };
  }

  render() {
    // const { word } = this.state;
    return (
      <div>
        <input
          type="text"
          value={this.state.word}
          onChange={e => this.setState({ word: e.target.value })}
        />
        <button
          onClick={e => {
            this.props.add(this.state.word);
            this.setState({ word: "" });
          }}
        >
          click me
        </button>
      </div>
    );
  }
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: []
    };
  }

  // componentDidMount() {}

  del = data => {
    console.log("called");
    console.log(data);
    this.setState({
      list: this.state.list.filter((el, i) => {
        if (i != data) {
          return data;
        }
      })
    });
  };

  addToList = data => {
    this.setState({ list: this.state.list.concat([data]) });
  };
  render() {
    // const { list } = this.state;
    // const list = ;
    return (
      <div>
        {/* <InputBox add={data => this.setState({ list: list.concat([data]) })} /> */}
        <InputBox add={this.addToList} />
        <List list={this.state.list} del={this.del} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
