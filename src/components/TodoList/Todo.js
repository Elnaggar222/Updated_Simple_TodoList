import FeatherIcon from "feather-icons-react";
import { useDispatch, useSelector } from "react-redux";
import { convertTaskCompletion , deleteTask, setActiveTodo } from "../../Store/Todos/TodosActions";
import {changeMode} from '../../Store/Modes/ModesActions'
import { modesTypes } from "../../Store/Types";
const Todo = ({ eachtask }) => {
    const Mode = useSelector(state => state.modesState.Mode)
    const dispatch = useDispatch()

    
    const toggleDone = (id) => {
        dispatch(convertTaskCompletion(id))
    }

    const editMode = (taskObjectToEdit) => {
        dispatch(changeMode(modesTypes.EDIT))
        dispatch(setActiveTodo(taskObjectToEdit))
    }

    return (
        <div className={`Todo-parent ${ eachtask.done ? 'done':'' }`}>
            <div className="circle-style" onClick={()=> toggleDone(eachtask.id)}> <FeatherIcon icon={eachtask.done ? "check-circle":"circle"} size="17" /> </div>
            <div className="wirtten-task"> {eachtask.title} </div>
            {Mode !== modesTypes.EDIT && (
            <div className="Icons-parent">
                    <div className="Toedit" onClick={() => editMode(eachtask)} > <FeatherIcon icon="edit" size="17" /> </div>
                    <div className="Totrash" onClick={()=>dispatch(deleteTask(eachtask.id))}> <FeatherIcon icon="trash-2" size="17" /> </div>
            </div>
            )}
        </div>
    )
}

export default Todo