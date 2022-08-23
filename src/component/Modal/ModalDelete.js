import React from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router'
import { DeleteTodolistByid } from '../../actions/TodolistActions'

export default function ModalDelete(props) {
    const { closeModal, TodoListById } = props
    const dispatch = useDispatch()
    const history = useHistory();
    const DeleteTodo = () => {
        closeModal(false)
        dispatch(DeleteTodolistByid(TodoListById.id))
        history.push('/Todolist')
    }
    return (
        <div>
            <div id="Modal_Delete" className="Modal_Delete">
                <div className="Modal_Delete__Detail">
                    <span onClick={() => closeModal(false)} className="close">&times;</span>
                    <p className="Modal_Delete__Detail--title">Are you sure?</p>
                    <div className="Modal_Delete__Detail--btn">
                        <button onClick={() => closeModal(false)} className="Modal_Delete__Detail--btn--Cancel">Cancel</button>
                        <button onClick={() => DeleteTodo()} className="Modal_Delete__Detail--btn--Delete">Delete</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
