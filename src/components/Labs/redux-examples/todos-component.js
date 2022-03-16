import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
const Todos = () => {
    const todos = useSelector(state => state.todos);
    const [todo, setTodo] = useState({do: '', done: false});
    // useState(initialState)返回一个数组，其中第一项是状态值，第二项是一个更新状态的函数。
    const dispatch = useDispatch();
    const updateTodoClickHandler = (todo) => {
        const action = {
            type: 'update-todo',
            todo
        };
        dispatch(action);
        // sent action to reducer
    }

    const deleteTodoClickHandler = (todo) => {
        const action = {
            type: 'delete-todo',
            todo
        };
        dispatch(action);
        // sent action to reducer
    }

    const createTodoClickHandler = () => {
        const action = {
            type: 'create-todo',
            todo
        };
        dispatch(action);
        // sent action to reducer
    }

    const todoChangeHandler = (event) => {
        const doValue = event.target.value;
        const newTodo = {
            do: doValue
        };
        setTodo(newTodo);
    }

    return(
        <>
            <h3>Todos</h3>
            <ul className="list-group">
                <li className="list-group-item">
                    <input
                        onChange={todoChangeHandler}
                        value={todo.do}
                        className="form-control"/>
                    {/*输入的内容会同步给value属性*/}
                    <button onClick={createTodoClickHandler}
                        className="btn btn-primary">
                        Create New Todo
                    </button>
                </li>
                {
                    todos.map(todo =>
                        <li className="list-group-item">
                            <input checked={todo.done}
                                onChange={(event) =>
                                    updateTodoClickHandler({...todo, done: event.target.checked})}
                                type="checkbox"/>
                                {todo.do}
                            <button onClick={() =>
                                deleteTodoClickHandler(todo)}
                                    className="btn btn-danger float-end">
                              Delete
                            </button>
                        </li>
                    )
                }
            </ul>
        </>
    );
};
export default Todos;
