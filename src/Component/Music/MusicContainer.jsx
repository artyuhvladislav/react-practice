import {connect} from 'react-redux';
import Music from './Music';
import { addMusicAC, deleteMusicAC } from '../../redux/musicReducer';
const mapStateToProps  = (state) => {
    return {
        musicList: state.musicPage.musicList
    }
}
const mapDispatchToProps  = (dispatch) => {
    return {    
        addMusic: (musicId) => {
            dispatch(addMusicAC(musicId))
        },
        deleteMusic: (musicId) => {
            dispatch(deleteMusicAC(musicId))
        }
    }
}
const MusicContainer = connect(mapStateToProps, mapDispatchToProps)(Music);
export default MusicContainer;