import React from 'react'

export default function DropDownStatus(props) {
    const { CloseSelectStatus, Status } = props
    return (

        <div onClick={() => CloseSelectStatus(Status)} className='modal_add_update__detail__inputText--statusDropdown--item'>
            <img src={`${process.env.PUBLIC_URL}/Icon/${Status}.png`} alt="..." />
            <p>{Status}</p>
        </div>

    )
}
