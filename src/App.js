import React from 'react';
import { Todo } from './components/Todo';
import AddTodo from './components/AddTodo';
import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { deleteTodo, completeTodo } from './actions';


const App = () => {

  // React Redux
  // useSelector pour récupérer des éléments du state global (équivalent de notre mapStateToProps)
  const todos = useSelector(state => state.todos);

  // useDispatch pour pouvoir envoyer le résultat d'une action à notre reducer
  const dispatch = useDispatch();

  const renderTodos = () => {
    const listTodos = todos.map(item => {
      return (
        <Todo
          key={Math.random()}
          item={item}
          checkboxAction={() => dispatch(completeTodo(item))}
          buttonAction={() => dispatch(deleteTodo(item))}
        />
      );
    });

    return (
      <div className="todos">
        <h2>Mes tâches</h2>
        {listTodos}
      </div >
    );

  }

  return (
    <div className="App">
      <header>
        <span role="img" aria-label="">🧠</span>
        <h1>Taskinator</h1>
        <span role="img" aria-label="">🤖</span>
      </header>
      <div className="container">
        <AddTodo />

        {renderTodos()}
      </div>
    </div>
  );

}

export default App;