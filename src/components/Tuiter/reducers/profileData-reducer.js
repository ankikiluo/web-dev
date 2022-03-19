import profileData from "../data/profileData.json";
const profileDataReducer =
    (state = profileData, action) => {
        switch (action.type) {
            case 'like-profile':
                return state.map(profile => {
                    if (profile._id === action.profile._id) {
                        if (profile.liked === true) {
                            profile.liked = false;
                            profile.stats.likes--;
                        } else {
                            profile.liked = true;
                            profile.stats.likes++;
                        }
                        return profile;
                    } else {
                        return profile;
                    }
                });
            case 'delete-profile':
                return state.filter(profile => profile._id !== action.profile._id);
            case 'create-profile':
                const newprofile = {
                    profile: action.profile,
                    _id: (new Date()).getTime() + '',
                    postedBy: {
                        "username": "ReactJS"
                    },
                    handle: "ReactJS",
                    time: "now",
                    logo_image: "../img/react.jpg",
                    avatar_image: "../img/react.jpg",
                    stats: {
                        comments: 333,
                        reprofileData: 111,
                        likes: 222,
                    }
                }
                return [
                    newprofile,
                    ...state,
                ];
            default:
                return profileData
        }
    }

export default profileDataReducer;
