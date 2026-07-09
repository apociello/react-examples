import { Component } from 'react';

class ListItem2 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      edit: false,
      input: props.todo.name,
    };
  }

  handleInput = (e) => {
    this.setState({
      input: e.target.value,
    });
  };

  render() {
    return (
      <li>
        {this.state.edit ? (
          <>
            <input
              type="text"
              value={this.state.input}
              onChange={this.handleInput}
            />
            <button
              onClick={() => {
                this.props.handleEditSumbit(this.props.todo, this.state.input);
                this.setState({ edit: false });
              }}
            >
              Resubmit
            </button>
          </>
        ) : (
          <>
            {' '}
            <p>{this.props.todo.name}</p>
            <div className="buttons">
              <button
                onClick={() =>
                  this.setState({
                    edit: true,
                  })
                }
              >
                edit
              </button>
              <button onClick={() => this.props.deleteItem(this.props.todo)}>
                delete
              </button>
            </div>
          </>
        )}
      </li>
    );
  }
}

export default ListItem2;
