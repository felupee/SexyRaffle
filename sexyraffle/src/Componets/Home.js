import React, { useContext, useState } from 'react';
import './Home.css';
import ChallengeContext from '../Context/ChallengeContext';

function Home() {
  const stage1 = [
    'Tome uma dose', 'Tome duas doses', 'Tire uma peça de roupa', 'Coloque uma peça de roupa',
    'Seu parceiro tem que tomar uma dose', 'Beije seu parceiro'
  ];
  const stage2 = ['desafio1', 'desafio2', 'desafio3', 'desafio4', 'desafio5', 'desafio5'];
  const stage3 = ['prenda1','prenda2', 'prenda3', 'prenda4', 'prenda5', 'prenda6'];
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
    const number = Math.floor(Math.random() * 6);
    setRandomNumber(number)
    selectStage();
    setStage(prevState => prevState + 1)
    console.log(users);
  };


  // useEffect(() => {
  //   selectStage();
  // }, []);

  // const handleReload = () => {
  //   raffleNumber();
  // };

  return (
    <div className='div-main'>
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
