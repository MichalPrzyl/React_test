class App extends React.Component {
  state = {
    counter: 1,
    bleach: 'sure'
  }
  render() {
    return (
      <div>
        <h1>Hello!</h1>
        <h2>counter: {this.state.bleach}</h2>

      </div>
    );
  }
}


ReactDOM.render(<App />, document.getElementById('root'))