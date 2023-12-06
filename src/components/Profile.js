import { useAuth0 } from "@auth0/auth0-react";

const Profile = () => {
  const { user, isAuthenticated } = useAuth0();
  return (
    isAuthenticated && (
      <div>
        <div className="profile-details">{JSON.stringify(user)}</div>
        <img src={user.picture} alt="image" />
        <ul>
          {Object.keys(user).map((objkey, i) => (
            <li key={i}>
              {objkey}: {user[objkey]}
            </li>
          ))}
        </ul>
      </div>
    )
  );
};

export default Profile;
