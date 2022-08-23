import React from 'react'

export default function DetailTask(props) {
    const { TodoListById } = props
    return (
        <div>
            <div className="taskDetail__info">
                <div className="taskDetail__info__list">
                    <div className="taskDetail__info__item">
                        <p className="taskDetail__info__item__title">Title</p>
                        <p className="taskDetail__info__item__title">{TodoListById && TodoListById.title}</p>
                    </div>
                    <div className="taskDetail__info__item">
                        <p className="taskDetail__info__item__title">Status</p>
                        <p className={`taskDetail__info__item__title taskDetail__info__item__title--status ${TodoListById && TodoListById.status == 'In Progress' ? 'in_progress' : TodoListById && TodoListById.status}`}>{TodoListById && TodoListById.status}</p>
                    </div>
                    <div className="taskDetail__info__item">
                        <p className="taskDetail__info__item__title">Priority</p>
                        <p className={`taskDetail__info__item__title taskDetail__info__item__title--priority ${TodoListById && TodoListById.priority}`}>{TodoListById && TodoListById.priority}</p>
                    </div>
                    <div className="taskDetail__info__item">
                        <p className="taskDetail__info__item__title">Create Date</p>
                        <p className="taskDetail__info__item__title">{TodoListById && TodoListById.create_Date}</p>
                    </div>
                    <div className="taskDetail__info__item">
                        <p className="taskDetail__info__item__title">Description</p>
                        <p className="taskDetail__info__item__title">{TodoListById && TodoListById.description}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
