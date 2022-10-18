import './index.css';

import React from 'react';
import ReactDOM from 'react-dom/client';
import user from './components/Profile/user.json';
import data from './components/Stats/data.json';
import friends from './components/FriendList/friends.json'

import { Profile } from './components/Profile/Profile.jsx';
import { Statistics } from 'components/Stats/statistics.jsx';
import {FriendList } from './components/FriendList/FriendList.jsx';



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Profile
  username={user.username}
  tag={user.tag}
  location={user.location}
  avatar={user.avatar}
  stats={user.stats}
/>
  <Statistics stats={data} />
    
  <FriendList friends={friends} />
  
  
  </React.StrictMode>
);

