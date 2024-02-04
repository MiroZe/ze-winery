import styles from './HomePage.module.css'
import logo from '../../assets/logo.png'

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
      
        <img src={logo} alt="logo" />
      </section>
    </div>
  );
};

export default HomePage;
