const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';

const initialState = {
    users: [
        // {   id: 1,
        //     fullName: 'Ivan',
        //     usersPhoto: '#',
        //     location: { country: 'Belarus', place: 'Minsk'},
        //     status: 'some text here',
        //     followed: true
        // },
        // {   id: 2,
        //     fullName: 'Sanay',
        //     usersPhoto: '#',
        //     location: { country: 'Belarus', place: 'Grodno'},
        //     status: 'some text here',
        //     followed: false
        // },
        // {   id: 3,
        //     fullName: 'Masha',
        //     usersPhoto: '#',
        //     location: { country: 'Belarus', place: 'Vitebsk'},
        //     status: 'some text here',
        //     followed: false
        // }
    ],

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
                    users: [...state.users, ...action.users]
                }
        
        default: 
            return state;
    }
}

export const followAC = (userId) => ({type: FOLLOW, userId});
export const unfollowAC = (userId) => ({type: UNFOLLOW, userId});
export const setUsersAC = (users) => ({type: SET_USERS, users})

export default usersReducer