import React, { useState, useEffect } from 'react'
import './TaskDetail.css'
import { Link } from 'react-router-dom'
import ModalDelete from '../../component/Modal/ModalDelete'
import ModalAddUpdate from '../../component/Modal/ModalAddUpdate'
import DetailTask from '../../component/DetailTask/DetailTask'
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router'
import { getTodolistItemById } from '../../actions/TodolistActions'
import Navbar from '../../component/Navbar/Navbar'

export default function TaskDetail() {
    const [modalEdit, setModalEdit] = useState(false)
    const [modalDelete, setModalDelete] = useState(false)
    const closeModalEdit = (Status) => {
        setModalEdit(Status)
    }
    const closeModalDelete = (Status) => {
        setModalDelete(Status)
    }
    const GetTodolistById = useSelector(state => state.GetTodolistById)
    const { TodoListById } = GetTodolistById
    const dispatch = useDispatch();
    const idTodo = useParams()
    useEffect(() => {
        dispatch(getTodolistItemById(idTodo.id))
        return () => {

        }
    }, [])
    return (
        <>
            <Navbar />
            <div className="taskDetail">
                <div className="taskDetail__header">
                    <Link to="/Todolist" className="taskDetail__header__btnBack" type="button"><i class="fas fa-arrow-left"></i></Link>
                    <div className="taskDetail__header__title">
                        <p className="taskDetail__header__title--main">Task Details</p>
                        <p className="taskDetail__header__title--hastag">#0f417571-1fa9-468d-9c81-72fe465a5762</p>
                    </div>
                    <button onClick={() => setModalEdit(true)} className="taskDetail__header__btn taskDetail__header__btn--edit" type="button"><i class="fas fa-pencil-alt"></i>Edit</button>
                    <button onClick={() => setModalDelete(true)} className="taskDetail__header__btn taskDetail__header__btn--delete" type="button"><i class="fas fa-trash-alt"></i>Delete</button>
                </div>
                <DetailTask TodoListById={TodoListById} />
                {modalEdit && <ModalAddUpdate modal="update" closeModal={closeModalEdit} TodoListById={TodoListById} />}
                {modalDelete && <ModalDelete closeModal={closeModalDelete} TodoListById={TodoListById} />}
            </div>
        </>
    )
}
