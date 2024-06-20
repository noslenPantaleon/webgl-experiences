import React from 'react';
import styles from './labels.module.css';

export default function Labels() {
  return (
    <section className={styles.pages}>
      <div className={styles.pages_wrapper}>
        <div id='page1' className={[styles.page, styles.pageWelcome].join(' ')}>
          <h1 className={styles.messageSub}> Bicicletas</h1>
        </div>
        <div
          id='page2'
          className={[
            styles.page,
            styles.pageMessageHeader,
            styles.pageHidden,
          ].join(' ')}
        >
          <div className={styles.messageContainer}>
            <h1 className={styles.message}>Manejar bicicleta Es Saludable</h1>
            <p className={styles.messageSub}>
              Salir en bici mejora tu físico y te hace más feliz.
            </p>
          </div>
        </div>
        <div
          id='page3'
          className={[styles.page, styles.pageMessage, styles.pageHidden].join(
            ' '
          )}
        >
          <div className={styles.messageContainer}>
            <h1 className={styles.message}>Es facil de mantener</h1>
            <p className={styles.messageSub}>
              Se repara facilmente y es economico.
            </p>
          </div>
        </div>

        <div
          id='page4'
          className={[styles.page, styles.pageMessage2, styles.pageHidden].join(
            ' '
          )}
        >
          <div className={styles.messageContainer}>
            <h1 className={styles.message}>Es Autosustentable</h1>
            <p className={styles.messageSub}>
              Es un medio alternativo de transporte en la ciudad y ayuda a
              conservar y proteger el medio ambiente.
            </p>
          </div>
          <div className={styles.buttonSection}>
            <button className={styles.comprar}>Buy now</button>
            <h1 className={styles.messageSub}>Get yours!</h1>
          </div>
        </div>
      </div>
    </section>
  );
}
