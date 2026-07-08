import { useState } from 'react';
import Count from './Count';
import ListItem from './ListItem';

const FunctionalInput = ({ name }) => {
  /*
    We declare two state variables and their setters,
    one to store the To-Do's
    and the other to store the value of the input field
  */
  const [todos, setTodos] = useState([
    { id: crypto.randomUUID(), name: 'Just some demo tasks' },
    { id: crypto.randomUUID(), name: 'As an example' },
  ]);
  const [inputVal, setInputVal] = useState('');

  const handleInputChange = (e) => {
    setInputVal(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setTodos((todo) => [...todo, { id: crypto.randomUUID(), name: inputVal }]);
    setInputVal('');
  };

  const deleteItem = (item) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== item.id));
  };

  return (
    <section>
      <h3>{name}</h3>
      {/* The input field to enter To-Do's */}
      <form onSubmit={handleSubmit}>
        <label htmlFor="task-entry">Enter a task: </label>
        <input
          type="text"
          name="task-entry"
          value={inputVal}
          onChange={handleInputChange}
        />
        <button type="submit">Submit</button>
      </form>
      <h4>All the tasks!</h4>
      {/* The list of all the To-Do's, displayed */}
      <ul>
        {todos.map((todo) => (
          <ListItem
            key={todo.id}
            todo={todo}
            deleteItem={deleteItem}
            setTodos={setTodos}
          />
        ))}
      </ul>
      <Count numTodos={todos.length} />
    </section>
  );
};

export default FunctionalInput;
