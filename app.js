const Item = props => (
    <li>
      <span style={{marginRight: "5px"}}>{props.name}</span>
      <button onClick={props.delete}>Usuń</button>
    </li>
)

class List extends React.Component {
  state = {
    list: [
      { id: 1, name: 'Item 1' },
      { id: 2, name: 'Item 2' },
      { id: 3, name: 'Item 3' },
      { id: 4, name: 'Item 4' }
    ]
  }
  handleDelete = id => {
    let list = [...this.state.list]
    list = list.filter(item => id !== item.id)
    this.setState({
      list
    })
  }
  render() {
    const list = this.state.list.map(item => (
      <Item
        key={item.id}
        name={item.name}
        delete={() => this.handleDelete(item.id)}
      />
    )
    )
    return (
      <ul>
        {list}
      </ul>
    )
  }
}

ReactDOM.render(<List />, document.getElementById('root'))