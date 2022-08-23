import React from 'react'

export default function DropDownPriority(props) {
    const { CloseSelectPriority, priority } = props
    return (
        <div onClick={() => CloseSelectPriority(priority)} className="modal_add_update__detail__inputText--priorityDropdown--item">
            <img src={`${process.env.PUBLIC_URL}/Icon/${priority}.png`} alt="..." />
            <p>{priority}</p>
        </div>
    )
}
