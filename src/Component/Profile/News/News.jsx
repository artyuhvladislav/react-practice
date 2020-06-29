import React from 'react';
import s from './News.module.css';
import { NavLink } from 'react-router-dom';
const NewItem = (props) => {
    return (
        <div>
            <NavLink to={`/profile/news/${props.id}`} className={s.itemWrapper}>{props.title}</NavLink>
        </div>
    )
}
const News = () => {
    return (
        <div>
            <h2>Top news</h2>
            <div className={s.news}>
                <NewItem className={s.link} title="some news" id="1"/>
                <NewItem className={s.link} title="some  second" id="2"/>
                <NewItem className={s.link} title="some second" id="3"/>
                <NewItem className={s.link} title="some second" id="4"/>
                <NewItem className={s.link} title="some second" id="5"/>
            </div>
        </div>
    )
}
export default News