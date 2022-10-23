import PropTypes from "prop-types";
import css from './FriendList.module.css'

export const FriendList = ({friends}) => {
    return (        
    <ul className={css.friendList}>
        {friends.map(({ id, name, avatar, isOnline }) => (
    <li className={css.item} key={id}>
    <span className={isOnline?css.online:css.offline}></span>
    <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
    <p className={css.name}>{name}</p>
    </li>))}
    </ul>
    )
}
 
FriendList.propTypes = {
  friends: PropTypes.arrayOf(
  PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired
  }),
 )
  
}
