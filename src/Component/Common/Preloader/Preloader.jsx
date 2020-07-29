import React from 'react';
import preloader from '../../../assets/img/preloader.gif'
const Preloader = (props) => {
    return (
        <div>
            <img src={preloader} style = { {width: '50px'}} alt=""/>
        </div>
    )
}
export default Preloader    