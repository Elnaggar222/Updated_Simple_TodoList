import { useSelector } from "react-redux"

const Header = () => {

    const todos = useSelector(state => state.todosState.todos)

    return (
        <header>
            <h1> قائمة المهام ({todos.length}) </h1>
        </header>
    )
}

export default Header