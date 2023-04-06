import React, { useContext, useState } from 'react';
import './Home.css';
import ChallengeContext from '../Context/ChallengeContext';

function Home() {
  const stage1 = [
    'Tome um shot', 'Tome um shot', 'Tome um shot', 'Tome dois shots', 'Seu parceiro toma um shot',
    'Faça uma massagem no seu parceiro', 'Dê um beijo no seu parceiro', 'Beije suavemente as costa do seu parceiro',
    'Chupe o pescoço do seu parceiro', 'Dê um shot ao seu parceiro usando sua boca',

  ];
  const stage2 = [
    'Tome um shot', 'Tome um shot', 'Tome dois shots', 'Tire uma peça de roupa',
    'Coloque uma peça de roupa', 'Chupe os seios do seu parceiro', 'Tire uma peça de roupa do seu parceiro',
    'Masturbe seu parceiro por cima da roupa', 'Beije os arredores da região íntima do seu parceiro',
    'Chupe a língua do seu parceiro'
];
  const stage3 = [
    'Tome um shot', 'Tome um shot', 'Tire uma peça de roupa', 'Tire uma peça de roupa',
    'Tire um peça de roupa do seu parceiro', 'Masturbe seu parceiro', 'Chupe seu parceiro',
    'Beijo grego no seu parceiro', '69 com seu parceiro', 'Beijo com Halls'];
  const [challenge, setChallenge] = useState(stage1);
  const { users } = useContext(ChallengeContext)

  const [randomNumber, setRandomNumber] = useState();
  const [round, setStage] = useState(1)
  const [dosePlayer1, setDosePlayer1] = useState(0);
  const [dosePlayer2, setDosePlayer2] = useState(0);

  const selectStage = () => {
    if (round <= 20) {
      setChallenge(stage1)
    }
    if (round >= 21 && round <= 40) {
      setChallenge(stage2)
    }
    if (round > 40) {
      setChallenge(stage3)
    }
  };

  const raffleNumber = () => {
    const number = Math.floor(Math.random() * 10);
    setRandomNumber(number)
    selectStage();
    setStage(prevState => prevState + 1)
    console.log(number);
  };


  // useEffect(() => {
  //   selectStage();
  // }, []);

  // const handleReload = () => {
  //   raffleNumber();
  // };

  return (
    <div className='div-main'>
      <h1>Rodada: {round}</h1>
      <div className='div-jogador1'>
        <h1>{users[0]}</h1>
        <div className='div-doses'>
          <p>Doses: {dosePlayer1}</p>
          <button onClick={() => setDosePlayer1(prevState => prevState + 1)}>+</button>
        </div>
      </div>

      <div className='div-desafio'>
        <h1>{challenge[randomNumber]}</h1>
        <button className='button-sort' onClick={raffleNumber}>Sortear Desafio</button>
      </div>

      <div className='div-jogador2'>
        <h1>{users[1]}</h1>
        <div className='div-doses'>
          <p>Doses: {dosePlayer2}</p>
          <button onClick={() => setDosePlayer2(prevState => prevState + 1)}>+</button>
        </div>
      </div>
    </div>


  );
}

export default Home;
