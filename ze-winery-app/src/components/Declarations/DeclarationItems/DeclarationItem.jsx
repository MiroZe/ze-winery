import Button from 'react-bootstrap/Button';
import styles from './DeclarationItems.module.css';





const DeclarationItem = (
  {index,
    _id,
     trademark,
     CNCode,
     additionalCode,
     pieces,
     packsQuantity,
     quantity,
      deleteItemFromDecalarationList,
    }) => {



return (
    <tr>
    <td>{index +1}</td>
    <td>{trademark}</td>
    <td>{CNCode}</td>
    <td>{additionalCode}</td>
    <td>{pieces}</td>
    <td>{packsQuantity}</td>
    <td>{quantity}</td>
    <td>
        <div className={styles['button-container']}>
        <Button variant="danger" onClick={() => deleteItemFromDecalarationList(_id)}>Изтрий</Button>
        </div>
    </td>
  </tr>
)

}

export default DeclarationItem