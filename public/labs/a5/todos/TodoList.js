import TodoItem from "./TodoItem.js";
import todos from "./todos.js";
const TodoList = () => {
    return(`
        <ul>
<!--            ${TodoItem('Buy milk')}-->
<!--            ${TodoItem('Pickup the kids')}-->
<!--            ${TodoItem('Walk the dog')}-->
            ${
            todos.map(todo => {
            return(TodoItem(todo));
            }).join('')
    }

        </ul>
    `);
}
export default TodoList;
