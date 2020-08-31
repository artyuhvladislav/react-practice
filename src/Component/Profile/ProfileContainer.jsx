import React from 'react';
import * as axios from 'axios';
import Profile from './Profile';
import { connect } from 'react-redux';
import { withRouter } from "react-router";
import { setUsersProfile } from '../../redux/profileReducer';
class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId;
        if(!userId){ userId = 2};
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`).then( response => {
            this.props.setUsersProfile(response.data);
        });
    }

    render() {
        return (
            <div>
                <Profile  {...this.props} profile={this.props.profile} />
            </div>
        )
    }
}
const mapStateToProps = (state) => ({
    profile: state.profilePage.profile
})
const WithUrlDataContainerComponent = withRouter(ProfileContainer)
export default connect(mapStateToProps, {setUsersProfile})(WithUrlDataContainerComponent)