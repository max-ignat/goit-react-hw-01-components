import PropTypes from 'prop-types';

import { Description, ProfileContainer, Avatar, ParagraphDesc, Name, StatList, StatsItem, Label, Quantity } from './Profile.styled';


export default function Profile({ username, tag, location, avatar, followers, views, likes }) {
    return (
      <ProfileContainer>
        <Description>
          <Avatar src={avatar} alt={username} />
          <Name> {username}</Name>
          <ParagraphDesc >@{tag}</ParagraphDesc>
          <ParagraphDesc >{location}</ParagraphDesc>
        </Description>

        <StatList >
          <StatsItem>
            <Label>Followers</Label>
            <Quantity>{followers}</Quantity>
          </StatsItem>
          <StatsItem>
            <Label>Views</Label>
            <Quantity>{views}</Quantity>
          </StatsItem>
          <StatsItem>
            <Label>Likes</Label>
            <Quantity>{likes}</Quantity>
          </StatsItem>
        </StatList>
      </ProfileContainer>
    );
 } 

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  likes: PropTypes.number.isRequired,
  views: PropTypes.number.isRequired,
  followers: PropTypes.number.isRequired,
};