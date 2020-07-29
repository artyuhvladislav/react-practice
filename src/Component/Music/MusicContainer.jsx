import {connect} from 'react-redux';
import Music from './Music';
import { addMusic, deleteMusic } from '../../redux/musicReducer';
const mapStateToProps  = (state) => {
    return {
        musicList: state.musicPage.musicList
    }
}

const MusicContainer = connect(mapStateToProps, {addMusic, deleteMusic})(Music);
export default MusicContainer;