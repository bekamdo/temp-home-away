'use client';

import { useEffect, useState } from 'react';
import { useToast } from '@/components/ui/use-toast';
import { DateRange } from 'react-day-picker';
import { useProperty } from '@/utils/store';
import { Calendar } from '../ui/calendar';
import { defaultSelected,generateDisabledDates,generateDateRange,generateBlockedPeriods } from '@/utils/calender';

const BookingCalender = () => {
  const currentDate = new Date();
  const [range,setRange] = useState<DateRange | undefined>(defaultSelected);
  const bookings = useProperty((state) => state.bookings);

  const blockPreriods = generateBlockedPeriods({bookings,today:currentDate});
  const {toast} = useToast();
  const unavailableDates = generateDisabledDates(blockPreriods);
  
  useEffect(() => {
    const selectedRange = generateDateRange(range);
    const isDisabledDateIncluded = selectedRange.some((date) => {
      if(unavailableDates[date]){
         setRange(defaultSelected)
         toast({
          description:"Some dates are booked. Please select again"
         });
         return true;
      }
      return false;
    })
    useProperty.setState({range})

  },[range])
  return (
    <Calendar mode="range" 
    defaultMonth ={currentDate} 
    selected={range}
     onSelect={setRange} 
     className='mb-4'
     disabled={blockPreriods}
     />
  )
}

export default BookingCalender