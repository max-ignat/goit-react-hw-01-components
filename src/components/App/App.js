import Profile from 'components/Profile/Profile';
import Statistics from 'components/Statistics/Statistics';
import FriendList from 'components/FriendList/FriendList';
import TransactionHistory from 'components/TransactionHistory/TransactionHistory';
import user from '../Data/user.json';
import friends from '../Data/friends.json';
import data from '../Data/data.json';
import transactions from '../Data/transactions.json';
import { Wraper } from './App.styled';

export const App = () => {
  return (
    <Wraper
    
    >
      <Profile
        
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        followers={user.stats.followers}
        views={user.stats.views}
        likes={user.stats.likes}
      />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />;
    </Wraper>
  );
};