import React, { useContext, useState } from 'react';
import ChallengeContext from '../Context/ChallengeContext';
import { useNavigate } from 'react-router-dom';
import './CreateUsers.css';

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
<form class="form" onSubmit={handleSubmit}>
  <label class="form__label">
    <span class="form__label-text">Jogador 1</span>
    <input type="text" value={jogador1} onChange={(e) => setJogador1(e.target.value)} class="form__input" />
  </label>
  <label class="form__label">
    <span class="form__label-text">Jogador 2</span>
    <input type="text" value={jogador2} onChange={(e) => setJogador2(e.target.value)} class="form__input" />
  </label>
  <button type="submit" class="form__button">Salvar jogadores</button>
</form>

  );
}

export default CreateUsers;
