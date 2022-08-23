import React from 'react'

export default function DropdownStatusInRow(props) {
    const { status, ChangeStatus } = props
    return (
        <div onClick={() => ChangeStatus(status)} className="todolist__item__changeStatus__selection--item">
            <img src={`Icon/${status}.png`} alt=""></img>
            <p>{status}</p>
        </div>
    )
}
