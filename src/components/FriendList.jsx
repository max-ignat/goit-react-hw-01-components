import PropTypes from 'prop-types';
import FriendListItem from './FriendListItem'

export default function FriendList({ friends }) {
    return (
        <ul>
            {friends.map(({ avatar, name, isOnline, id }) => (
                <FriendListItem
                    key={id}
                    avatar={avatar}
                    name={name}
                    isOnline={isOnline}
                />
            ))}
        </ul>
    )
}

FriendList.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
                avatar: PropTypes.string.isRequired,
            name:PropTypes.string.isRequired,
            isOnline:PropTypes.bool.isRequired,
        })
    )

}