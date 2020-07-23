import React from 'react';
import s from './News.module.css';
import { NavLink } from 'react-router-dom';
import News from './News';
import { connect } from 'react-redux';

// const NewsContainer = (props) => {

//     return (
//         <storeContext.Consumer>
//             {
//                 (store) => {
//                     const state = store.getState();
//                     return (
//                         <News newsData = {state.profilePage.newsData}/>
//                     )
//                 }
//             }
//         </storeContext.Consumer>
        
//     )
// }
const mapStateToProps = (state) => {
    return {
        newsData: state.profilePage.newsData
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        
    }
}
const NewsContainer = connect(mapStateToProps, mapDispatchToProps)(News)
export default NewsContainer