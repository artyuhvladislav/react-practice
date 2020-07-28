import React from 'react';
import s from './Music.module.css'

const Music = (props) => {
    
    return (
        <div>
            {
                props.musicList.map( m => {
                    return (
                    <div>
                        <div>
                            <img src="" alt=""/>
                            <span>{m.authorName}</span>
                            <div>
                                {m.added 
                                    ?   <button onClick= {() => { props.deleteMusic(m.id)} } >delete</button> 
                                    :   <button onClick= {() => { props.addMusic(m.id)} }>add</button>}
                            </div>
                            
                        </div>
                        <div>
                            {/* <span>{u.location.country}</span>
                            <span>{u.location.place}</span>
                            <p>{u.status}</p> */}
                        </div>
                    </div>
                    )
                })
            }
        </div>
    )
}
export default Music