class Message extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      messageIsActive: false
    }
    this.handleMessageButton = this.handleMessageButton.bind(this);
  }

  handleMessageButton() {
    this.setState({
      messageIsActive: !this.state.messageIsActive
    })

  }

  render() {
    console.log(this.state.messageIsActive);
    const text = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.Phasellus fermentum urna eget laoreet vestibulum.Nunc quis ligula bibendum, consectetur urna vitae, consequat ligula.Cras venenatis viverra nibh ut mollis.Vivamus scelerisque felis est, eget pharetra tellus sodales ac.Sed porttitor urna sed felis consequat pellentesque.Curabitur quis felis nibh.Donec pellentesque lectus vel lobortis fermentum.';

    return (
      <React.Fragment>
        <button onClick={this.handleMessageButton}>{this.state.messageIsActive ? 'Ukryj' : 'Pokaż'}</button>
        {this.state.messageIsActive ? <p>{text}</p> : null}
      </React.Fragment>
    )
  }
}

ReactDOM.render(<Message />, document.getElementById('root'))