import "./Profile.css";
import ProfileStats from "../ProfileStats/ProfileStats";
import ProfilPictureStates from "../ProfilPicture/ProfilPicture";
import { useState } from "react";

function Profile({ initialName, profilUrl }) {
  // local (stateful) data
  const [name, setName] = useState(initialName);
  const [likes, setLikes] = useState(0);
  const [profilPicture, setPfp] = useState("https://d9-wret.s3.us-west-2.amazonaws.com/assets/palladium/production/s3fs-public/styles/full_width/public/thumbnails/image/NASA_Earth.jpg?itok=M0aRnEJ5");

  function handleLike() {
    // state is immutable – we create a new value, not modify in place
    setLikes(likes + 1);
  }

  function handleChangeName() {
    const newName = prompt("Enter new name:", name);
    if (newName && newName.trim()) {
      setName(newName.trim());
    }
  }

  function handleProfilPicture() {
    const pfpImg = prompt("Enter the profil picture URL:", profilPicture);
    if(pfpImg && pfpImg.trim()) {
        setPfp(pfpImg);
    }
  }

  return (
    <div className="profile-card">
      <ProfilPictureStates pfpUrl={profilPicture} />
      <h2>{name}</h2>
      <button onClick={handleChangeName}>Change name</button>
      <button onClick={handleProfilPicture}>Change Profil</button>

      {/* Stateless child gets data & actions via props */}
      <ProfileStats likes={likes} onLike={handleLike} />

    </div>

  );
}

export default Profile;