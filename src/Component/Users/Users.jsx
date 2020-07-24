import React from 'react';
import s from './Users.module.css'

const Users = (props) => {
   
   
    return (
        <div>
            {
                props.users.map( u => {
                    return (
                    <div>
                        <div>
                            <img src="" alt=""/>
                            <span>{u.fullName}</span>
                            <span>{u.followed}</span>
                        </div>
                        <div>
                            <span>{u.location.country}</span>
                            <span>{u.location.place}</span>
                            <p>{u.status}</p>
                        </div>
                    </div>
                    )
                })
            }
        </div>
    )
}
export default Users