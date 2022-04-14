import {UPDATE_TUIT_THUMB, UPDATE_TUIT_LIKE, CREATE_TUIT, DELETE_TUIT, FIND_ALL_TUITS} from "../../actions/tuits-actions";
const tuitsReducer = (state = [], action) => {
    switch (action.type) {
        case UPDATE_TUIT_THUMB:
            return state.map(
                tuit => tuit._id === action.tuit._id ?
                        action.tuit : tuit);
        case UPDATE_TUIT_LIKE:
            return state.map(tuit => {
                if(tuit._id === action.tuit._id) {
                    if(tuit.liked === true) {
                        tuit.liked = false;
                        tuit.stats.likes--;
                    } else {
                        tuit.liked = true;
                        tuit.stats.likes++;
                    }
                    return tuit;
                } else {
                    return tuit;
                }
            });
        case CREATE_TUIT:
            // const formattedNewTuit = {
            //     ...action.newTuit,
            //     "topic": "New Tuit from Server",
            //     "postedBy": {
            //         "username": "Server's voice"
            //     },
            //     "handle": "ReactJS",
            //     "time": "2h",
            //     "title": "The New Tuit From server",
            //     "logo_image": "../img/react.jpg",
            //     "avatar_image": "../img/react.jpg",
            //     "stats": {
            //         "comments": 0,
            //         "retuits": 0,
            //         "likes": 0},
            //     "thumbUp": 0,
            //     "thumbDown": 0
            // };
            return [
                ...state,
                action.newTuit
            ];
        case FIND_ALL_TUITS:
            return action.tuits;
        case DELETE_TUIT:
            return state.filter(tuit => tuit._id !== action.tuit._id);
        default:
            return state;
    }
}

export default tuitsReducer;
