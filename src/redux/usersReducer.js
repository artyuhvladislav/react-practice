const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE';
const SET_TOTAL_COUNT = 'SET-TOTAL-COUNT';

const initialState = {
    users: [],
    totalCount: 0,
    userPages: 5,
    currentPage: 1

}
const usersReducer  = (state = initialState, action) => {
    
    switch(action.type){
        case FOLLOW:
            return {
                ...state,
                users: state.users.map( u => {
                    if(u.id === action.userId) {
                        return {
                            ...u,
                            followed: true
                        }
                    }
                    return u
                })
            } 
            case UNFOLLOW:
                return {
                    ...state,
                    users: state.users.map( u => {
                        if(u.id === action.userId) {
                            return {
                                ...u,
                                followed: false
                            }
                        }
                        return u
                    })
                }

            case SET_USERS:
                return {
                    ...state,
                    users: [...action.users]
                }
            case SET_CURRENT_PAGE:
                return {
                    ...state,
                    currentPage: action.currentPage
                }
            case SET_TOTAL_COUNT:
                return {
                    ...state,
                    totalCount: action.totalCount
                }
        default: 
            return state;
    }
}

export const followAC = (userId) => ({type: FOLLOW, userId});
export const unfollowAC = (userId) => ({type: UNFOLLOW, userId});
export const setUsersAC = (users) => ({type: SET_USERS, users});
export const setCurrentPageAC = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage});
export const setTotalCountAC = (totalCount) => ({type: SET_TOTAL_COUNT, totalCount});

export default usersReducer