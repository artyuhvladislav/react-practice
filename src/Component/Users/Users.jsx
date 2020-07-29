import React from 'react';
import s from './Users.module.css';
import userPhoto from '../../assets/img/ava.jpg';


const User = (props) => {
        let totalPages = Math.ceil(props.totalCount/props.userPages);
        let pages = [];
        for(let i = 1; i <= totalPages; i++){
            pages.push(i)
        }
    return (
        <div>
                <div>
                    {pages.map(p => <span onClick = {() => {props.onPageChanged(p)}} className={props.currentPage === p ? s.selected : undefined}>{p}</span>)}            
                </div>
                {
                    props.users.map( u => {
                        return (
                        <div>
                            <div>
                                <div>
                                    <img className = {s.avatar} src = {u.photos.small != null ? u.photos.small : userPhoto} alt=""/>
                                </div>
                                
                                <span>{u.name}</span>
                                <div>
                                    {u.followed 
                                        ?   <button onClick= {() => { props.unfollow(u.id)} } >unfollow</button> 
                                        :   <button onClick= {() => { props.follow(u.id)} }>follow</button>}
                                </div>
                                
                            </div>
                            <div>
                                <span>{'u.location.country'}</span>
                                <span>{'u.location.place'}</span>
                                <p>{u.status}</p>
                            </div>
                            
                        </div>
                        )
                    })
                }
        </div>
    )
}
export default User