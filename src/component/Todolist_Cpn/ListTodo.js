import React from 'react'
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom'
import { PatchStatusTodolist } from '../../actions/TodolistActions'
import DropdownStatusInRow from '../Dropdown/DropdownStatusInRow';

export default function ListOnHold(props) {
    const { Todoitem } = props
    const dispatch = useDispatch();
    const ChangeStatus = (status) => {
        if (status != Todoitem.status) {
            dispatch(PatchStatusTodolist({ status, TodoId: Todoitem.id }))
        }
        // dispatch(getTodolistItem())
    }
    return (
        <div className="todolist__item">
            <Link to={`/Taskdetail/${Todoitem.id}`} style={{ textDecoration: 'none' }} className="todolist__item__detail">
                <div className="todolist__item__detail--title">
                    <img src='Icon/Icon_Title.png' alt=""></img>
                    <p>{Todoitem.title}</p>
                </div>
                <div className={`todolist__item__detail--status ${Todoitem.status == 'In Progress' ? 'in_progress' : Todoitem.status}`}>
                    <p>{Todoitem.status}</p>
                </div>
                <div className="todolist__item__detail--priority">
                    <img src={`Icon/${Todoitem.priority}.png`} alt=""></img>
                    <p>{Todoitem.priority}</p>
                </div>
            </Link>
            <div className="todolist__item__changeStatus">
                <div className="todolist__item__changeStatus--icon">
                    <i class="fas fa-ellipsis-h"></i>
                </div>
                <div className="todolist__item__changeStatus__selection">
                    <DropdownStatusInRow status="In Progress" ChangeStatus={ChangeStatus} />
                    <DropdownStatusInRow status="Completed" ChangeStatus={ChangeStatus} />
                    <DropdownStatusInRow status="Canceled" ChangeStatus={ChangeStatus} />
                </div>
            </div>
        </div>
    )
}
