import React from 'react'
import user1 from '../../assets/user2.png'
import './style3.css'

function Conlist() {
    return (
        <>
            <div class="userprofile">
                <img src={user1} alt="" class="user-img" />
                <div>
                    <p class="username">User Name</p>
                </div>
            </div>
        </>
    )
}

export default Conlist