import React from 'react';
import PlayerCard from './PlayerCard';

interface Player {
  name: string;
  wiki: string;
}

interface Props {
  players: Player[];
}

const PlayerList: React.FC<Props> = ({ players }) => {
    return (
        <div>
            {players.map((player) => (
                <PlayerCard key={player.name} name={player.name} wiki={player.wiki} />
            ))}
        </div>
    );
};

export default PlayerList;