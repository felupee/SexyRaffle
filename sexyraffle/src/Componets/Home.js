import React, { useState, useEffect } from 'react';


function Home() {
  const stage1 = [
    'Tome uma dose', 'Tome duas doses', 'Tire uma peça de roupa', 'Coloque uma peça de roupa',
    'Seu parceiro tem que tomar uma dose', 'Beije seu parceiro'
  ];
  const stage2 = ['desafio1', 'desafio2', 'desafio3', 'desafio4', 'desafio5', 'desafio5'];
  const stage3 = ['prenda1','prenda2', 'prenda3', 'prenda4', 'prenda5', 'prenda6'];
  const [challenge, setChallenge] = useState(stage1);

  const [randomNumber, setRandomNumber] = useState();
  const [round, setStage] = useState(1)

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
    console.log(round);
  };


  // useEffect(() => {
  //   selectStage();
  // }, []);

  // const handleReload = () => {
  //   raffleNumber();
  // };

  return (
    <div>
      <h1>{challenge[randomNumber]}</h1>
      <button onClick={raffleNumber}>Sortear Desafio</button>
    </div>
  );
}

export default Home;
