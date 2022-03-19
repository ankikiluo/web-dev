import profileData from "../data/profileData.json";

const profileDataReducer = (state = profileData,
                            action) => {
        switch (action.type) {
            case 'edit-profile':
                return action.profile;
            default:
                return profileData
        }
    }

export default profileDataReducer;
