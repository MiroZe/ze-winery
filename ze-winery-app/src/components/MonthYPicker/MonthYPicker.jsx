import { useState } from 'react';
import { MonthPicker, MonthInput } from 'react-lite-month-picker';

const  MonthYPicker =() => {

    let newDate = new Date()
  const [selectedMonthData, setSelectedMonthData] = useState({
    month: newDate.getMonth() + 1,
    year: newDate.getFullYear()
  });
  const [isPickerOpen, setIsPickerOpen] = useState(false);



  return (
    <>
      <div>
        <MonthInput
          selected={selectedMonthData}
          setShowMonthPicker={setIsPickerOpen}
          showMonthPicker={isPickerOpen}
          

        />
        {isPickerOpen ? (
          <MonthPicker 
            setIsOpen={setIsPickerOpen}
            selected={selectedMonthData}
            onChange={setSelectedMonthData}
           
          />
        ) : null}
      </div>
    </>
  );
}

export default MonthYPicker;