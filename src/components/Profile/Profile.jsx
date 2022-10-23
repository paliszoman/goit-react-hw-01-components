import PropTypes from "prop-types";
import css from"./Profile.module.css"


export const Profile = ({ username, tag, location = "unknown", avatar ="https://cdn-icons-png.flaticon.com/512/1077/1077012.png", stats }) => {
    return (<div className={css.profile}>
  <div className={css.description}>
        <img
          src={avatar}
      alt="User avatar"
      className={css.avatar}
    />
        <p className={css.name}>{username}</p>
        <p className={css.tag}>@{tag}</p>
    <p className={css.location}>{location}</p>
  </div>

    <ul className={css.stats}>
        {[
    [1,"Followers", stats.followers],
    [2,"Views", stats.views],
    [3,"Likes", stats.likes],
  ].map(([id, text, value]) => (
    <li key={id} className={css.statsPoint}>
      <span className={css.label}>{text}</span>
      <span className={css.quantity}>{value}</span>
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

