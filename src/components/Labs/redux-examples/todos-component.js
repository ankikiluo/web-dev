import React, {useState} from "react";
import {useSelector} from "react-redux";
const Todos = () => {
    const todos =
        useSelector(state => state.todos);
    const [todo, setTodo] = useState({do: ''});
    // useState(initialState)返回一个数组，其中第一项是状态值，第二项是一个更新状态的函数。
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
                </li>
                {
                    todos.map(todo =>
                      <li className="list-group-item">
                          {todo.do}
                      </li>
                    )
                }
            </ul>
        </>
    );
};
export default Todos;
