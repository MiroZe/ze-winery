import styles from './HomePage.module.css'

const HomePage = () => {


  return (
    <div className={styles["container"]}>
      <header>
        <h1>Wine Declarations App</h1>
      </header>

      <section>
        <h2>Welcome to our Wine Declarations App</h2>
        <p>
          Easily create customs declarations for wines and streamline your import/export process.
        </p>
        <button className={styles["get-started-button"]}>Get Started</button>
      </section>
    </div>
  );
};

export default HomePage;
