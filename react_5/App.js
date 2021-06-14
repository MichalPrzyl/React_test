var listaZadan = ["Czynność z listy", "Czynność z listy -2", "xd"]
class Todolist extends React.Component {
  render() {
    return (
      <div>
        <AddActivity />
        {listaZadan.map(el => <Activity name={el} />)}
      </div>
    )
  }
}

class Activity extends React.Component {
  state = {
    completed: false
  }
  wykonano = () => {
    if (!this.state.completed) {
      this.setState({
        completed: true,
      })
    }
    else {
      this.setState({
        completed: false,
      })

    }
  }
  render() {
    return (
      <div className="activity">
        <h1>{this.props.name} -> {this.state.completed ? "Ukończone" : "Nieukończone"}</h1>
        <button onClick={this.wykonano}>{this.state.completed ? "Niewykonano" : "Wykonano"}</button>
      </div>
    )
  }
}
const AddActivity = () => {
  const [list, setList] = React.useState(listaZadan);
  const dodajzadanie = () => {
    console.log("TUTAJ");
    listaZadan.push("NOsz kurwa ać");
  }

  return (
    <div>
      <input type="text" />
      <button onClick={dodajzadanie}>Dodaj</button>
    </div>
  )
}


ReactDOM.render(<Todolist />, document.getElementById('root'));