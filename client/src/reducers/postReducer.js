import {
	REQUEST_USER_POSTS,
	RECEIVE_USER_POSTS,
	ERROR_WRITING_POST,
	START_WRITE_POST,
	FINISHED_WRITE_POST,
	RESET_NEW_POST,
	GET_LOCATION,
	GOT_LOCATION,
	LOCATION_FAILED,
	SHARE_STARTED,
	SHARE_FAILED,
	SHARE_FINISHED,
	GET_SHARED_STARTED,
	GET_SHARED_FINISHED,
	GET_SHARED_FAILED
} from '../actions/types';
import _ from 'lodash';

export default function posts(
	state = {
		isFetching: false,
		lastUpdated: Date.now(),
		isWritingPost: false,
		success: false,
		error: false,
		isGettingLocation: false,
		locSuccess: false,
		location: {},
		isSharing: false,
		shareSuccess: false,
		shared: [],
		isFetchingShared: false,
		fetchSharedSuccess: false,
		sharedPosts: [],
		items: []
	},
	action
) {
	switch (action.type) {
		case REQUEST_USER_POSTS:
			return _.assign({}, state, {
				isFetching: true
			});
		case RECEIVE_USER_POSTS:
			return _.assign({}, state, {
				isFetching: false,
				items: action.items,
				lastUpdated: action.receivedAt
			});
		case ERROR_WRITING_POST:
			return _.assign({}, state, {
				isWritingPost: false,
				success: false,
				error: true
			});
		case START_WRITE_POST:
			return _.assign({}, state, {
				isWritingPost: true,
				success: false
			});
		case FINISHED_WRITE_POST:
			return _.assign({}, state, {
				isWritingPost: false,
				success: true
			});
		case RESET_NEW_POST:
			return _.assign({}, state, {
				isWritingPost: false,
				success: false
			});
		case GET_LOCATION:
			return _.assign({}, state, {
				isGettingLocation: true,
				locSuccess: false
			});
		case GOT_LOCATION:
			return _.assign({}, state, {
				isGettingLocation: false,
				locSuccess: true,
				location: {
					written: action.location,
					latitude: action.latitude,
					longitude: action.longitude
				}
			});
		case LOCATION_FAILED:
			return _.assign({}, state, {
				isGettingLocation: false,
				locSuccess: false
			});
		case SHARE_STARTED:
			return _.assign({}, state, {
				isSharing: true,
				shareSuccess: false
			});
		case SHARE_FAILED:
			return _.assign({}, state, {
				isSharing: false,
				shareSuccess: false
			});
		case SHARE_FINISHED:
			return _.assign({}, state, {
				isSharing: false,
				shareSuccess: true,
				shared: action.shared
			});
		case GET_SHARED_STARTED:
			return _.assign({}, state, {
				isFetchingShared: true,
				fetchSharedSuccess: false
			});
		case GET_SHARED_FINISHED:
			return _.assign({}, state, {
				isFetchingShared: false,
				fetchSharedSuccess: true,
				sharedPosts: action.sharedPosts
			});
		case GET_SHARED_FAILED:
			return _.assign({}, state, {
				isFetchingShared: false,
				fetchSharedSuccess: false
			});
		default:
			return state;
	}
}
