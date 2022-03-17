import React, { useState } from 'react'
import styles from './App.module.css';
import poweredImg from './assets/powered.png';
import { GridItem } from './components/GridItem/GridItem';
import { levels, calculateimc, Level } from './helpers/imc'
import leftarrow from'./assets/leftarrow.png';


function App() {

  const [heightField, setHeightField] = useState<number>(0);
  const [weightField, setWeightField] = useState<number>(0);
  const [toshow, setToShow] = useState<Level | null>(null);

  const handleCalculateButton = () => {
    if (heightField && weightField) {
      setToShow(calculateimc(heightField, weightField));
    } else {
      alert('Digite todos os campos corretamente!!');
    }
  }

  const handleBackButton =()=>{
      setToShow(null);
      setHeightField(0);
      setWeightField(0);
  }
  return (
    <div className={styles.main}>

      <header>
        <div className={styles.headerContaier}>
          <img src={poweredImg} width="150px" />

        </div>
      </header>

      <div className={styles.container}>
        {/* Leftside */}
        <div className={styles.leftSide}>
          <h1>Calcule o seu img</h1>

          <p>
            IMC é a sigla para o indice de Massa Corpórea.parametro <br />
            indicado pela Organização Mundial da Sáude para <br />
            calcular o peso ideal de cada pessoa.
          </p>

          <input
            type="number"
            placeholder="Digite a sua altura. Ex 1.5(em metros)"
            value={heightField > 0 ? heightField : ''}
            onChange={(e) => setHeightField(parseFloat(e.target.value))}
            disabled={toshow ? true:false}
          />


          <input
            type="number"
            placeholder="Digite o seu peso . Ex 75.3(em kg)"
            value={weightField > 0 ? weightField : ''}
            onChange={(e) => setWeightField(parseFloat(e.target.value))}
            disabled={toshow ? true:false}
          />

          <button onClick={handleCalculateButton} disabled={toshow ? true:false}>
            Calcular
          </button>
        </div>

    {/* right Side */}
        <div className={styles.rightSide}>
          {!toshow &&
            <div className={styles.grid}>
          {levels.map((item, key) => (
            <GridItem key={key} item={item} />
          ))}
        </div>
       
       }
        {toshow &&
          <div className={styles.rightBig}>
            <div className={styles.rightArrow} onClick={handleBackButton}>
              <img src={leftarrow} alt=""  width="40px"/>
            </div>
         <GridItem item={toshow} />
          </div>
        }
      </div>
    </div>

    <footer className={styles.footer}>
     &copy; All Rights Reserved <b> Adilson Caculo</b>
    </footer>
    </div >
  );
}

export default App