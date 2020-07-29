import { connect } from 'react-redux'
import Friends from './Friends'

const mapStateToProps = (state) => {
    return {
        users: state.friendsPage.users
    }
}

const FriendsContainer = connect(mapStateToProps, {})(Friends)

export default FriendsContainer