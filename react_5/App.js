var listaZadan = ["Czynność z listy", "Czynność z listy -2", "xd", "Zrobić zakupy"]

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
        <h1 className="title">{this.props.name}</h1>
        <h2>Status: {this.state.completed ? <span className="green">Ukończone</span> : <span className="red">Nieukończone</span>}</h2>
        <button onClick={this.wykonano}>{this.state.completed ? "Niewykonano" : "Wykonano"}</button>
      </div>
    )
  }
}
const AddActivity = () => {
  const dodajzadanie = () => {
    console.log("TUTAJ");
    listaZadan.push("Dodana nowa wartość do listy ale jest bezużyteczna bo nie ma żadnego wpływu na stan komponentu klasowego");
  }

  return (
    <div>
      <input type="text" />
      <button onClick={dodajzadanie}>Dodaj</button>
    </div>
  )
}


ReactDOM.render(<Todolist />, document.getElementById('root'));