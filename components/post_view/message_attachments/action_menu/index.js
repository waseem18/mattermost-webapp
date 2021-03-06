// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {selectAttachmentMenuAction} from 'actions/views/posts';

import ActionMenu from './action_menu.jsx';

function mapStateToProps(state, ownProps) {
    return {
        selected: state.views.posts.menuActions[ownProps.postId],
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators({
            selectAttachmentMenuAction,
        }, dispatch),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ActionMenu);
