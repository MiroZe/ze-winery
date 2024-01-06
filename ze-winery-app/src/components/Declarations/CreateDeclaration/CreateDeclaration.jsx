import ProductsList from '../../Products/ProductsList'
import styles from './CreateDeclaration.module.css'



const CreateDecration = () => {
    const viewChooseBtn = true
return (

    <div className={styles['declaration-conttainer']}>
        <ProductsList viewChooseBtn={viewChooseBtn}/>


    </div>

)



}
export default CreateDecration