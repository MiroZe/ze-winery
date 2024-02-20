import styles from './Footer.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';






const Footer = () => {

  return (

    <footer className={styles["site-footer"]}>
      <div className={styles["container"]}>
        <div className={styles["row"]}>
          <div className={styles["col-sm-12 col-md-6"]}>
            <h6>About</h6>
            <p className={styles["text-justify"]}>ZeWinery App <i>LET BE SIMPLE </i> е приложение, подпомагащо отчитането и създаването на митнически декларации и Акцизни документи .</p>
          </div>
          <div className={`${styles['col-md-8']} ${styles['col-sm-6']} ${styles['col-xs-12']}`}>

            <p className={styles["copyright-text"]}>Copyright &copy; 2017 All Rights Reserved by
              <a href="#"> miroZe</a>.
            </p>
          </div>
          
        </div>


      </div>
      <div className={styles["container"]}>
        <div className={styles["row"]}>


        </div>
        <div className={`${styles['col-md-4']} ${styles['col-sm-6']} ${styles['col-xs-12']}`}>

          <ul className={styles["social-icons"]}>
            <li><a className={styles["facebook"]} href="#"><FontAwesomeIcon icon="fa-brands fa-facebook-f" /></a></li>
            <li><a className={styles["twitter"]} href="#"><i className={styles["fa fa-twitter"]}></i></a></li>
            <li><a className={styles["linkedin"]} href="#"><i className={styles["fa fa-linkedin"]}></i></a></li>
          </ul>
        </div>
      
      </div>
    </footer>
  );




}
export default Footer