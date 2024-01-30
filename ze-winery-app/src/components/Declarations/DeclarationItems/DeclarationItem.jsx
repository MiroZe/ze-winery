import Button from 'react-bootstrap/Button';
import styles from './DeclarationItems.module.css';





const DeclarationItem = ({index,_id, trademarkName,CNCode,additionalCode,pieces,quantity, deleteItemFromDecalarationList}) => {

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
        <Button variant="danger" onClick={() => deleteItemFromDecalarationList(_id)}>Изтрий</Button>
        </div>
    </td>
  </tr>
)

}

export default DeclarationItem