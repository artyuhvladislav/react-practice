const ADD_MUSIC = 'ADD-MUSIC';
const DELETE_MUSIC = 'DELETE-MUSIC';
const initialState = {
    musicList: [
        {
            id: 1,
            authorName: 'Lana del Ray',
            trackName: 'this is track name',
            added: true
        },
        {
            id: 2,
            authorName: 'rocket',
            trackName: 'this is track name',
            added: false
        },
        {
            id: 3,
            authorName: 'ac/dc',
            trackName: 'this is track name',
            added: true
        }
    ]
}
const musicReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_MUSIC: 
            return {
                ...state,
                musicList: state.musicList.map( m => {
                    if(m.id === action.musicId) {
                        return {
                            ...m,
                            added: true
                        }
                    }
                    return m
                })

            }
        case DELETE_MUSIC: 
            return {
                ...state,
                musicList: state.musicList.map( m => {
                    if(m.id === action.musicId) {
                        return {
                            ...m,
                            added: false
                        }
                    }
                    return m
                })

            }
        default: 
            return state
    }
}
export const addMusic = (musicId) => ({type: ADD_MUSIC, musicId});
export const deleteMusic = (musicId) => ({type: DELETE_MUSIC, musicId});
export default musicReducer;