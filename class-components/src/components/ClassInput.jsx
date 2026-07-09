import { Component } from 'react';
import Count from './Count';
import ListItem2 from './ListItem2';

class ClassInput extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: [
        { id: crypto.randomUUID(), name: 'Just some demo tasks' },
        { id: crypto.randomUUID(), name: 'As an example' },
      ],
      inputVal: '',
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    this.handleEditSumbit = this.handleEditSumbit.bind(this);
  }

  handleInputChange(e) {
    this.setState({
      inputVal: e.target.value,
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState((state) => ({
      todos: state.todos.concat({
        id: crypto.randomUUID(),
        name: state.inputVal,
      }),
      inputVal: '',
    }));
  }

  deleteItem(item) {
    this.setState((state) => ({
      todos: state.todos.filter((todo) => todo.id !== item.id),
    }));
  }

  handleEditSumbit(item, newName) {
    this.setState((state) => ({
      todos: state.todos.map((todo) =>
        todo.id === item.id ? { ...todo, name: newName } : todo,
      ),
    }));
  }

  render() {
    return (
      <section>
        <h3>{this.props.name}</h3>
        {/* The input field to enter To-Do's */}
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="task-entry">Enter a task: </label>
          <input
            type="text"
            name="task-entry"
            value={this.state.inputVal}
            onChange={this.handleInputChange}
          />
          <button type="submit">Submit</button>
        </form>
        <h4>All the tasks!</h4>
        {/* The list of all the To-Do's, displayed */}
        <ul>
          {this.state.todos.map((todo) => (
            <ListItem2
              key={todo.id}
              todo={todo}
              deleteItem={this.deleteItem}
              handleEditSumbit={this.handleEditSumbit}
            />
          ))}
        </ul>
        <Count numTodos={this.state.todos.length} />
      </section>
    );
  }
}

export default ClassInput;
