import FeatherIcon from "feather-icons-react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { modesTypes } from "../../Store/Types";
import { changeMode } from "../../Store/Modes/ModesActions";
import { addNewTodo, editTodo , setActiveTodo } from "../../Store/Todos/TodosActions";
const TodosForm = () => {
    const [newTaskTitle,setnewTaskTitle] = useState('')
    const dispatch = useDispatch()
    const Mode = useSelector(state => state.modesState.Mode)
    const activeTodo = useSelector(state => state.todosState.activeTodo)
    

    useEffect(() => {
        if(Mode === modesTypes.EDIT && activeTodo ){
            setnewTaskTitle(activeTodo.title)
        } 
    },[Mode,activeTodo])

    const TotoggleMode = () => {
        if(Mode === modesTypes.ADD){
            dispatch(changeMode(modesTypes.NOT_DONE))
        }else if(Mode === modesTypes.NOT_DONE){
            dispatch(changeMode(modesTypes.ADD))
        }
    }

    const setTaskTitleState = (e) => {
        setnewTaskTitle(e.target.value)
    }
    const checkAndSentTitle = () => {
        if(Mode !== modesTypes.EDIT){
            const newTaskToAdd = {
                id: Date.now(),
                title: newTaskTitle,
                done: false
            }
            if(newTaskTitle.trim()){
                dispatch(addNewTodo(newTaskToAdd))
            } 
            setnewTaskTitle('');
        }else if(Mode === modesTypes.EDIT){
            dispatch(editTodo(newTaskTitle))
            dispatch(setActiveTodo({}))
            dispatch(changeMode(modesTypes.ADD))
            setnewTaskTitle('');
        }
    }
    return (
        <div className={`TodosForm-parent ${Mode === modesTypes.NOT_DONE ? 'done':''}`}>
            <div className={`circle-style ${Mode===modesTypes.EDIT?"chage-color-circuit":""}`} onClick={TotoggleMode}> <FeatherIcon icon={Mode===modesTypes.EDIT ? "alert-circle":"circle"} size="17" /> </div>
            <input value={newTaskTitle} onChange={setTaskTitleState} type="text" placeholder="أضف مهمة جديدة ..." />
            <button disabled={!newTaskTitle.trim()} onClick={checkAndSentTitle}>
                {(Mode === modesTypes.EDIT) ? "تعديل.." : "إضافة"}  
            </button>
        </div>
    )
}
export default TodosForm