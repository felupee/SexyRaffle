import React, { useContext, useState } from 'react';
import ChallengeContext from '../Context/ChallengeContext';
import { useNavigate } from 'react-router-dom';

function CreateUsers() {
  const { saveUsers } = useContext(ChallengeContext);
  const [jogador1, setJogador1] = useState('');
  const [jogador2, setJogador2] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    saveUsers(jogador1);
    saveUsers(jogador2);
    setJogador1('');
    setJogador2('');
    navigate('/home');
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Jogador 1:
        <input type="text" value={jogador1} onChange={(e) => setJogador1(e.target.value)} />
      </label>
      <label>
        Jogador 2:
        <input type="text" value={jogador2} onChange={(e) => setJogador2(e.target.value)} />
      </label>
      <button type="submit">Salvar jogadores</button>
    </form>
  );
}

export default CreateUsers;
