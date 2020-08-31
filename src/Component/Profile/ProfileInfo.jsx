import React from 'react';
import Preloader from '../Common/Preloader/Preloader';

const ProfileInfo = (props) => {
    
    if(!props.profile) {
        return <Preloader />
    }
    return (
        <div >
            <h2>{props.profile.fullName}</h2>
            <img src={props.profile.photos.large} alt=""/>
            <p>{props.profile.aboutMe}</p>
            <div style={{ display: 'flex', flexDirection: 'column'}}>
                <span>Contacts</span>
                <a href={props.profile.contacts.facebook}>facebook</a>
                <a href={props.profile.contacts.vk}>vk</a>
                <a href={props.profile.contacts.twitter}>twitter</a>
                <a href={props.profile.contacts.instagram}>instagram</a>
                <a href={props.profile.contacts.youtube}>youtube</a>
                <a href={props.profile.contacts.github}>github</a>
                <a href={props.profile.contacts.vk}>vk</a>
            </div>
        </div>
    )
}
export default ProfileInfo  