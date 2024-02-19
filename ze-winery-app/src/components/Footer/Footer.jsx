import styles from './Footer.module.css'

const Footer = () => {

    return(
    
      <footer className={styles["site-footer"]}>
        <div className={styles["container"]}>
          <div className={styles["row"]}>
            <div className={styles["col-sm-12 col-md-6"]}>
              <h6>About</h6>
              <p className={styles["text-justify"]}>Scanfcode.com <i>CODE WANTS TO BE SIMPLE </i> is an initiative  to help the upcoming programmers with the code. Scanfcode focuses on providing the most efficient code or snippets as the code wants to be simple. We will help programmers build up concepts in different programming languages that include C, C++, Java, HTML, CSS, Bootstrap, JavaScript, PHP, Android, SQL and Algorithm.</p>
            </div>
      </div>
            <div className={`${styles['col-xs-6']} ${styles['col-md-3']}`}> 

  
            <div className={`${styles['col-xs-6']} ${styles['col-md-3']}`}> 
              <h6>Quick Links</h6>
              <ul className={styles["footer-links"]}>
                <li><a href="http://scanfcode.com/about/">About Us</a></li>
                <li><a href="http://scanfcode.com/contact/">Contact Us</a></li>
                <li><a href="http://scanfcode.com/privacy-policy/">Privacy Policy</a></li>
                <li><a href="http://scanfcode.com/sitemap/">Sitemap</a></li>
              </ul>
            </div>
          </div>
          <hr />
        </div>
        <div className={styles["container"]}>
          <div className={styles["row"]}>
          <div className={`${styles['col-md-8']} ${styles['col-sm-6']} ${styles['col-xs-12']}`}>

              <p className={styles["copyright-text"]}>Copyright &copy; 2017 All Rights Reserved by 
           <a href="#">Scanfcode</a>.
              </p>
            </div>
  
            <div className={`${styles['col-md-4']} ${styles['col-sm-6']} ${styles['col-xs-12']}`}>

              <ul className={styles["social-icons"]}>
                <li><a className={styles["facebook"]} href="#"><i className={styles["fa fa-facebook"]}></i></a></li>
                <li><a className={styles["twitter"]} href="#"><i className={styles["fa fa-twitter"]}></i></a></li>
                <li><a className={styles["dribbble"]} href="#"><i className={styles["fa fa-dribbble"]}></i></a></li>
                <li><a className={styles["linkedin"]} href="#"><i className={styles["fa fa-linkedin"]}></i></a></li>   
              </ul>
            </div>
          </div>
        </div>
  </footer>
          );
    



}
export default Footer