import News from './News';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
    return {
        newsData: state.newsPage.newsData
    }
}

const NewsContainer = connect(mapStateToProps, {})(News)
export default NewsContainer