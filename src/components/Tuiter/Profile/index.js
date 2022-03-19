import ProfileItem from "./profileItem";
import {useSelector} from "react-redux";
const Profile = () => {
    const profileData = useSelector(state => state.profileData);
    return (
        <>
            {profileData.map && profileData.map(profile => {
                return(<ProfileItem key={profile.handle}
                                     profile={profile}/>);
            })}
        </>
    );
}
export default Profile;