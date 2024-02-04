import { useState } from 'react';
import { MonthPicker, MonthInput } from 'react-lite-month-picker';

const  MonthYPicker =({selectedMonthData,setSelectedMonthData}) => {

//     let newDate = new Date()
//   const [selectedMonthData, setSelectedMonthData] = useState({
//     month: newDate.getMonth() + 1,
//     year: newDate.getFullYear()
//   });
  const [isPickerOpen, setIsPickerOpen] = useState(false);

  

  return (
    <>
      <div >
        <MonthInput
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
      </div>
    </>
  );
}

export default MonthYPicker;