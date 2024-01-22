import Button from 'react-bootstrap/Button';
import styles from './DeclarationItems.module.css';





const DeclarationItem = ({index, trademarkName,CNCode,additionalCode,pieces,quantity}) => {

console.log(quantity);

return (
    <tr>
    <td>{index +1}</td>
    <td>{trademarkName}</td>
    <td>{CNCode}</td>
    <td>{additionalCode}</td>
    <td>{pieces}</td>
    <td>{quantity}</td>
    <td>
        <div className={styles['button-container']}>
        <Button variant="warning">Редактирай</Button>
        <Button variant="danger">Изтрий</Button>
        </div>
    </td>
  </tr>
)

}

export default DeclarationItem