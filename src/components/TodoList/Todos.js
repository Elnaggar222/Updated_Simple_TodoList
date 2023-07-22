import { useEffect } from "react"
import Todo from "./Todo"
import { useSelector } from "react-redux"
import { useState } from "react"
import { modesTypes } from "../../Store/Types"
const Todos = () => {
    const [todos,setTodos] = useState([])
    const allTodos = useSelector(state => state.todosState.todos)
    const activeTodo = useSelector(state => state.todosState.activeTodo)
    const Mode = useSelector(state => state.modesState.Mode)

    useEffect(()=>{
        if(Mode === modesTypes.ADD){
            setTodos(allTodos)
        }else if(Mode === modesTypes.EDIT){
            setTodos([activeTodo])
        }else if(Mode === modesTypes.NOT_DONE){
            const notDoneTodos = allTodos.filter( td => td.done === false )
            setTodos(notDoneTodos)
        }

    },[Mode , allTodos , activeTodo])

    useEffect( () => {
        localStorage.setItem("todosList",JSON.stringify(allTodos))
    },[allTodos])

    return (
        <div className="Todos-parent">
            {todos.map((eachtask) => (<Todo  eachtask={eachtask} key={eachtask.id}/>))}
            {todos.length === 0 && (<h3 className="no-Todo">لا يوجد مهام حالية ...</h3>)}
        </div>
    )
}

export default Todos