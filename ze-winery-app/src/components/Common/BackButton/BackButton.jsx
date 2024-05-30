import Button from 'react-bootstrap/Button';
import {  Link } from 'react-router-dom';
import styles from './BackButton.module.css'


const BackButton = ({path}) => {

    

return (
    <Button as={Link} to={path} className={styles['back-button']}>Back</Button>
)

}

export default BackButton;