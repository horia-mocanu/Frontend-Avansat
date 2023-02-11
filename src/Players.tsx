import React, { useEffect } from 'react';
import PlayerList from './components/PlayerList';
import { useAuthState } from 'react-firebase-hooks/auth';
import 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { getAuth } from 'firebase/auth';
import config from './Firebase';
import './components/Players.css';

const auth = getAuth(config);

const players = [
  { name: 'Lebron James', wiki: 'https://en.wikipedia.org/wiki/LeBron_James' },
  { name: 'Kevin Durant', wiki: 'https://en.wikipedia.org/wiki/Kevin_Durant' },
  { name: 'Stephen Curry', wiki:'https://en.wikipedia.org/wiki/Stephen_Curry' },
  { name: 'Giannis Antetokounmpo', wiki: 'https://en.wikipedia.org/wiki/Giannis_Antetokounmpo' },
  { name: 'James Harden', wiki: 'https://en.wikipedia.org/wiki/James_Harden' },
  { name: 'Anthony Davis', wiki: 'https://en.wikipedia.org/wiki/Anthony_Davis' },
  { name: 'Kawhi Leonard', wiki: 'https://en.wikipedia.org/wiki/Kawhi_Leonard' },
  { name: 'Damian Lillard', wiki: 'https://en.wikipedia.org/wiki/Damian_Lillard' },
  { name: 'Russel Westbrook', wiki: 'https://en.wikipedia.org/wiki/Russell_Westbrook' },
  { name: 'Joel Embiid', wiki: 'https://en.wikipedia.org/wiki/Joel_Embiid' },
  ];

  const Players: React.FC = () => {
    const [user, initializing, error] = useAuthState(auth);
    const navigate = useNavigate();
  
    useEffect(() => {
      if (!initializing && !user) {
        navigate('/login');
      }
    }, [user, initializing, navigate]);
  
    return (
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <div style={{ width: '500px', border: '1px solid gray', padding: '20px', borderRadius: '10px' }}>
        {initializing ? (
          <div>Loading...</div>
        ) : error ? (
          <div>Error: {error.message}</div>
        ) : (
          <div>
            <h1 style={{ marginTop: '50px' }}>Players List</h1>
                <PlayerList players={players} />
          </div>
        )}
        </div>
      </div>
    );
};
  
export default Players;