import styles from './Footer.module.css'

const Footer = () => {

    return(
            <footer className={styles['footer']}>
              <div className={styles['social-links']}>
                <div>
                  <h3>Social Media</h3>
                  <ul className={styles['social-list']}>
                    <li>
                      <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                        Facebook
                      </a>
                    </li>
                    <li>
                      <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
                        Twitter
                      </a>
                    </li>
                    <li>
                      <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                        Instagram
                      </a>
                    </li>
                  </ul>
                </div>
                <div className={styles['contact-info']}>
                  <h3>Contact</h3>
                  <p>123 Main Street</p>
                  <p>City, Country</p>
                  <p>Email: example@example.com</p>
                  <p>Phone: +123 456 7890</p>
                </div>
              </div>
              {/* Add more content as needed */}
            </footer>
          );
    



}
export default Footer