import {Todo, TodoList} from './classes';
import { crearTodoHtml } from './js/componentes';
import './styles.css';

export const todoList = new TodoList();

// todoList.todos.forEach(todo => crearTodoHtml(todo));
todoList.todos.forEach(crearTodoHtml);

// const newTodo = new Todo('Aprender react');

// todoList.nuevoTodo(newTodo);

console.log('todos', todoList.todos);