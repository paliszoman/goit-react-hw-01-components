import PropTypes from "prop-types";
import "./Profile.css"


const Profile = ({ username, tag, location = "unknown", avatar ="https://cdn-icons-png.flaticon.com/512/1077/1077012.png", stats }) => {
    return (<div className="profile">
  <div className="description">
        <img
          src={avatar}
      alt="User avatar"
      className="avatar"
    />
        <p className="name">{username}</p>
        <p className="tag">@{tag}</p>
    <p className="location">{location}</p>
  </div>

    <ul className="stats">
        {[
    [1,"Followers", stats.followers],
    [2,"Views", stats.views],
    [3,"Likes", stats.likes],
  ].map(([id, text, value]) => (
    <li key={id}>
      <span className="label">{text}</span>
      <span className="quantity">{value}</span>
    </li> ))}
  </ul>
</div>);
}

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string,
  stats: PropTypes.object.isRequired,
}



export {Profile};