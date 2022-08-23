import React, { useState } from 'react'
import DropDownStatus from '../Dropdown/DropDownStatus'
import DropDownPriority from '../Dropdown/DropDownPriority'
import { getTodolistItemById, PatchTodolistByid, PostTodolist, getTodolistItem } from '../../actions/TodolistActions'
import { useDispatch } from 'react-redux';

export default function ModalAddUpdate(props) {
    const { closeModal, TodoListById, modal } = props
    const [SelectStatus, setSelectStatus] = useState(false)
    const [SelectPriority, setSelectPriority] = useState(false)
    const [title, setTitle] = useState(TodoListById ? TodoListById.title : "")
    const [description, setDescription] = useState(TodoListById ? TodoListById.description : "")
    const [status, setStatus] = useState(TodoListById ? TodoListById.status : "Pending")
    const [priority, setPriority] = useState(TodoListById ? TodoListById.priority : "Minor")
    const today = new Date();
    const date = today.getDate() + '-' + (today.getMonth() + 1) + '-' + today.getFullYear();
    const time = today.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })
    const create_Date = `${date} at ${time}`
    const dispatch = useDispatch()

    const CloseSelectStatus = (status) => {
        setStatus(status)
        setSelectStatus(false)
    }
    const CloseSelectPriority = (priority) => {
        setPriority(priority)
        setSelectPriority(false)
    }

    const closeChange = () => {
        closeModal(false)
    }
    const submitHandel = (e) => {
        e.preventDefault()
        if (modal == "Add") {
            dispatch(PostTodolist({ title, status, priority, description, create_Date }))
            closeModal(false)
        }
        else {
            dispatch(PatchTodolistByid({ TodoId: TodoListById.id, data: { title, status, priority, description } }))
            closeModal(false)
        }

    }
    return (
        <div>
            <div id="Modal_Add_New" className="modal_add_update">
                <div className="modal_add_update__detail">
                    <span onClick={closeChange} className="close">&times;</span>
                    <div className="modal_add_update__detail__Title">
                        <p>{modal == "Add" ? "Add new" : "Update"}</p>
                    </div>
                    <form onSubmit={(e) => submitHandel(e)}>
                        <div className="modal_add_update__detail__inputText">
                            <input value={title} onChange={(e) => setTitle(e.target.value)} type="text" placeholder="Title"></input>
                        </div>
                        <div className="modal_add_update__detail__inputText">
                            <div onClick={() => setSelectStatus(SelectStatus ? false : true) & setSelectPriority(false)} className="modal_add_update__detail__inputText--status">
                                <p>{status}</p>
                            </div>
                            {
                                SelectStatus &&
                                <div className="modal_add_update__detail__inputText--statusDropdown">
                                    <DropDownStatus Status="In Progress" CloseSelectStatus={CloseSelectStatus} />
                                    <DropDownStatus Status="Completed" CloseSelectStatus={CloseSelectStatus} />
                                    <DropDownStatus Status="Canceled" CloseSelectStatus={CloseSelectStatus} />
                                </div>
                            }
                        </div>
                        <div className="modal_add_update__detail__inputText">
                            <div onClick={() => setSelectPriority(SelectPriority ? false : true) & setSelectStatus(false)} className="modal_add_update__detail__inputText--priority">
                                <p>{priority}</p>
                            </div>
                            {
                                SelectPriority &&
                                <div className="modal_add_update__detail__inputText--priorityDropdown">
                                    <DropDownPriority priority="Minor" CloseSelectPriority={CloseSelectPriority} />
                                    <DropDownPriority priority="Normal" CloseSelectPriority={CloseSelectPriority} />
                                    <DropDownPriority priority="Critical" CloseSelectPriority={CloseSelectPriority} />
                                </div>
                            }

                        </div>
                        <div className="modal_add_update__detail__inputText" >
                            <textarea value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Description" cols="30"
                                rows="30"></textarea>
                        </div>
                        {modal == "Add" ?
                            <div className="modal_add_update__detail__btnModal">
                                <button onClick={() => closeModal(false)} className="modal_add_update__detail__btnModal--cancel">Cancel</button>
                                <button type="submit" className="modal_add_update__detail__btnModal--create">Create</button>
                            </div>
                            :
                            <div className="modal_add_update__detail__btnModal">
                                <button type="submit" className="modal_add_update__detail__btnModal--create">Update</button>
                            </div>
                        }
                    </form>
                </div>
            </div>
        </div>
    )
}
