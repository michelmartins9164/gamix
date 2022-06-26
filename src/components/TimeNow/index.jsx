import {React, useEffect, useState} from 'react'
import { Hour } from '../../styled';

export default function TimeNow() {
    const [time, setTime] = useState();
    useEffect(() => {
        setInterval(() => {
            const timeNow = new Date();
            const hourNow =  timeNow.toLocaleTimeString()
            setTime(hourNow)
        }, 1000)
    },[])
    return (
    <div>
        <Hour>
            {time}
        </Hour>
    </div>
  )
}

