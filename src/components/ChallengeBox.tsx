import { useState, useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import styles from '../styles/components/ChallengeBox.module.css';

function ChallengeBox() {
  const contextData = useContext(ChallengesContext);
  console.log(contextData);

  const [hasActiveChallenge, setHasActiveChallenge] = useState(true);

  return (
    <div className={styles.challengeBoxContainer}>
      {hasActiveChallenge
        ? (
          <div className={styles.challengeActive}>
            <header>Ganhe 400 XP</header>

            <main>
              <img src="icons/body.svg" alt="Body" />
              <strong>Novo Desafio</strong>
              <p>Levante e faça uma caminhada de 3 minutos.</p>
            </main>

            <footer>
              <button
                type="button"
                className={styles.challengeFailedButton}>
                Falhei
              </button>
              <button
                type="button"
                className={styles.challengeSucceededButton}>
                Completei
              </button>
            </footer>
          </div>
        )
        : (
          <div className={styles.challengeNotActive}>
            <strong>Finalize um ciclo para receber um desafio.</strong>
            <p>
              <img src="icons/level-up.svg" alt="Level Up" />
              Avance de nível completando desafios.
            </p>
          </div>
        )
      }
    </div>
  );
}

export default ChallengeBox;
