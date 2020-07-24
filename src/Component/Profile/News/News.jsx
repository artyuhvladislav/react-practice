import React from 'react';
import s from './News.module.css';
import { NavLink } from 'react-router-dom';

const NewsItem = (props) => {
    return (
        <div>
            <NavLink to={`/profile/news/${props.id}`} className={s.itemWrapper}>{props.title}</NavLink>
        </div>
    )
}

const News = (props) => {
    const newsItemElements = props.newsData.map( el => {
        return <NewsItem className={s.link} title={el.title} key = {el.id} id={el.id}/>
    });
    return (
        <div>   
            <h2>Top news</h2>
            <div className={s.news}>
                {newsItemElements}
            </div>
        </div>
    )
}
export default News