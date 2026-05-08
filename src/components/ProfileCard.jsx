import profile from "../assets/profile.png";
function ProfileCard() {
  return (
    <div className="card profile-card">
      <h2>Profile Section (&lt;ProfileCard /&gt;)</h2>
      <img src={profile} alt="profile" className="profile-img" />
      <div className="profile-info">
        <p>Name: Devendra</p>
        <p>Age: 17</p>
      </div>
    </div>
  );
}

export default ProfileCard;