import { useState } from 'react';
import { MonthPicker, MonthInput } from 'react-lite-month-picker';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleExclamation } from '@fortawesome/free-solid-svg-icons'
import styles from './MonthYPicker.module.css'


const  MonthYPicker =({selectedMonthData,setSelectedMonthData}) => {


  const [isPickerOpen, setIsPickerOpen] = useState(false);
  console.log(selectedMonthData.monthName);
  

  return (
    <>
      <div className={styles['picker-container']}>
      
        <MonthInput
          bgColor="#0476d0"
          selected={selectedMonthData}
          setShowMonthPicker={setIsPickerOpen}
          showMonthPicker={isPickerOpen}
          size={'small'}
          
          

        />
        {isPickerOpen ? (
          <MonthPicker 
            setIsOpen={setIsPickerOpen}
            selected={selectedMonthData}
            onChange={setSelectedMonthData}
            size={'small'}
       
           
          />
        ) : null}
        {!selectedMonthData.monthName && <FontAwesomeIcon icon={faCircleExclamation} size='xl' style={{color:"red", marginBottom:"1rem"}} />}
     
      </div>
    </>
  );
}

export default MonthYPicker;

