class App extends React.Component {
  state = {
    value: ""
  }

  handleInputChange = (e) => {
    this.setState({
      value: e.target.value
    })
  }

  reset = () => {
    this.setState({
      value: ""
    })
  }
  render() {
    return (
      <React.Fragment>
        <input value={this.state.value} placeholder="Wpisz..." onChange={this.handleInputChange} type="text" />
        <button onClick={this.reset}>Reset</button>
        <h1 className="title">{this.state.value.toUpperCase()}</h1>
      </React.Fragment>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'));