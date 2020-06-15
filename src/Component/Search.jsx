import React from 'react';
import s from './Search.module.css';
const Search = () => {
    return (
        <div className={s.search}>
            <input className={s.field} type="text" />
            <div className={s.iconblock}>
                <img src="./img/search-icon.png" alt="search-icon" />
            </div>

        </div>
    )
}
export default Search