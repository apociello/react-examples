import { useState } from 'react';

export default function ListItem({ todo, deleteItem, setTodos }) {
  const [edit, setEdit] = useState(false);
  const [input, setInput] = useState(todo);

  const handleInput = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = () => {
    setTodos((todos) => todos.map((newTodo) => (newTodo === todo ? input : newTodo)));
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
          <p>{todo}</p>
          <div className="buttons">
            <button onClick={() => setEdit(true)}>edit</button>
            <button onClick={() => deleteItem(todo)}>delete</button>
          </div>
        </>
      )}
    </li>
  );
}
