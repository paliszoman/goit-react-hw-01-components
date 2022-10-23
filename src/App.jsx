import user from './components/data/user.json';
import data from './components/data/data.json';
import friends from './components/data/friends.json'
import transactions from './components/data/transactions.json';

import { Profile } from './components/Profile/Profile.jsx';
import { Statistics } from 'components/Stats/Statistics.jsx';
import { FriendList } from './components/FriendList/FriendList.jsx';
import { TransactionHistory } from './components/TransactionHistory/TransactionHistory.jsx'

export const App = () => {
    return (
    <>
<Profile
  username={user.username}
  tag={user.tag}
  location={user.location}
  avatar={user.avatar}
  stats={user.stats}
/>
  <Statistics stats={data} />
    
  <FriendList friends={friends} />
  
  <TransactionHistory transactions={transactions} />
</>
)
}