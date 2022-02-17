// const TodoItem = (todo) => {
//     return(`
//         <li>${todo}</li>
//     `);
// }
// export default TodoItem;
const TodoItem = (todo) => {
    return(`
        <li>
            <input type="checkbox"/>
            ${todo.title}(${todo.status})
        </li>
    `);
}
export default TodoItem;
