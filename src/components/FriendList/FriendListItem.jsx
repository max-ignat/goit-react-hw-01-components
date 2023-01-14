import PropTypes from 'prop-types';
import { Item, Status, Avatar, Name } from './FriendListItem.styled';

export default function FriendListItem({ avatar, name, isOnline }) {
  return (
    <Item>
      <Status isOnline={isOnline}></Status>
      <Avatar src={avatar} alt={name} width="60" />
      <Name>{name}</Name>
    </Item>
  );
}
FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};