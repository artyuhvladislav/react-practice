import React from 'react';
import s from './Users.module.css';
import userPhoto from '../../assets/img/ava.jpg';
import * as axios from 'axios';
class Users extends React.Component {
    constructor(props) {
        super(props);
    }
    getUsers() {
        if(this.props.users.length === 0) {
            axios.get('https://social-network.samuraijs.com/api/1.0/users').then( response => {
            
                this.props.setUsers(response.data.items)
            })
        }
    }
    render() {
        this.getUsers();
        return (
            <div>
                {
                    this.props.users.map( u => {
                        return (
                        <div>
                            <div>
                                <div>
                                    <img className = {s.avatar} src = {u.photos.small != null ? u.photos.small : userPhoto} alt=""/>
                                </div>
                                
                                <span>{u.name}</span>
                                <div>
                                    {u.followed 
                                        ?   <button onClick= {() => { this.props.unfollow(u.id)} } >unfollow</button> 
                                        :   <button onClick= {() => { this.props.follow(u.id)} }>follow</button>}
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
}
// const Users = (props) => {
//     if(props.users.length === 0) {
//         axios.get('https://social-network.samuraijs.com/api/1.0/users').then( response => {
        
//             props.setUsers(response.data.items)
//         })
//     }
    

   
//     return (
//         <div>
//             {
//                 props.users.map( u => {
//                     return (
//                     <div>
//                         <div>
//                             <div>
//                                 <img className = {s.avatar} src = {u.photos.small != null ? u.photos.small : userPhoto} alt=""/>
//                             </div>
                            
//                             <span>{u.name}</span>
//                             <div>
//                                 {u.followed 
//                                     ?   <button onClick= {() => { props.unfollow(u.id)} } >unfollow</button> 
//                                     :   <button onClick= {() => { props.follow(u.id)} }>follow</button>}
//                             </div>
                            
//                         </div>
//                         <div>
//                             <span>{'u.location.country'}</span>
//                             <span>{'u.location.place'}</span>
//                             <p>{u.status}</p>
//                         </div>
//                     </div>
//                     )
//                 })
//             }
//         </div>
//     )
// }
export default Users