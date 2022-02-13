import React, { useEffect, useState } from "react";

function Users() {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    setTimeout(async () => {
      const result = await fetch(
        "https://jsonplaceholder.typicode.com/users/1"
      );
      const data = await result.json();
      setProfile(data);
    }, 5000);
  }, []);

  return (
    <div className="users">
      <h2>Users</h2>
      {profile && (
        <div className="profile">
          <h3>{profile.username}</h3>
          <p>{profile.email}</p>
          <a href={profile.website}>{profile.website}</a>
        </div>
      )}

      {!profile && <p>Loading....</p>}
    </div>
  );
}

export default Users;
