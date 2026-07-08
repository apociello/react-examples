import { useState } from 'react';

export default function ListItem({ todo, deleteItem, setTodos }) {
  const [edit, setEdit] = useState(false);
  const [input, setInput] = useState(todo.name);

  const handleInput = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = () => {
    setTodos((todos) =>
      todos.map((newTodo) =>
        newTodo.id === todo.id ? { ...newTodo, name: input } : newTodo,
      ),
    );
    setEdit(false);
  };

  return (
    <li>
      {edit ? (
        <>
          <input type="text" value={input} onChange={handleInput} />
          <button onClick={handleSubmit}>Resubmit</button>
        </>
      ) : (
        <>
          {' '}
          <p>{todo.name}</p>
          <div className="buttons">
            <button onClick={() => setEdit(true)}>edit</button>
            <button onClick={() => deleteItem(todo)}>delete</button>
          </div>
        </>
      )}
    </li>
  );
}
