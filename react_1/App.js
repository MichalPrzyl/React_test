class App extends React.Component {
  state = {
    counter: 1,
  }
  add = () => {
    this.setState({ counter: '5' })
  }
  render() {
    return (
      <React.Fragment>
        <h1>{this.state.counter}</h1>
        <button onClick={this.add}>Dodaj</button>
      </React.Fragment>
    );
  }
}


ReactDOM.render(<App />, document.getElementById('root'))