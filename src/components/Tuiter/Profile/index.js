import ProfileItem from "./profileItem";
import {useSelector} from "react-redux";
const Profile = () => {
    let profileData = useSelector(state => state.profileData);
    return (
        <>

            <ProfileItem key={profileData.handle}
                                profile={profileData}/>

        </>
    );
}
export default Profile;