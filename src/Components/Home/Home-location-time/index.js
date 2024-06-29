import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import "./index.css"

const HomeLocationBar = () => {
  const [startDate, setStartDate] = useState(null);
  

  return (
    <div className='bar-outline pb-5'>
      <div className='bar-content-1 col-md-4'>
      <i class="fas fa-map-marker-alt loc-icon"></i>
        <div className='bar-word-content'>
          <h4>Location</h4>
          <input
            type="text"
            name="text"
            className="input"
            placeholder="Where are you going?"
          />
        </div>
      </div>

      <div className='bar-content-2 col-md-4'>
      <i class="fas fa-calendar-week loc-icon"></i>
        <div className='bar-word-content'>
          <h4>Check-in date</h4>
          <DatePicker
          className='date-box'
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            dateFormat="MM/dd/yyyy"
            placeholderText="Enter the date"
            showMonthDropdown
            showYearDropdown
            dropdownMode="select"
            popperPlacement="top-end"
            popperModifiers={{
              offset: {
                enabled: true,
                offset: '10px, 10px'
              },
              preventOverflow: {
                enabled: true,
                escapeWithReference: false,
                boundariesElement: 'viewport'
              }
            }}
          />
        </div>
      </div>

      <div className='bar-content-3 col-md-4'>
      <i class="fas fa-male loc-icon"></i>
        <div className='bar-word-content'>
          <h4>Guests</h4>
          <h6>Add guests</h6>
        </div>
      </div>
    </div>
  );
};

export default HomeLocationBar;