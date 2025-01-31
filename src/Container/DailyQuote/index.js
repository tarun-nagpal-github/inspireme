import React, {useState, useEffect} from 'react'
import DailyQuotes from './../../Components/DailyQuote'
import { randomQuotes } from './../../API/random_quotes'

const DailyQuote = () => {
    const todayDate = new Date().getDate();

    const [dailyQuote, setDailyQuote] = useState([]);
    useEffect(()=> {
        randomQuotes(todayDate).then(data => setDailyQuote(data))
    })
    return <DailyQuotes todayQuote={dailyQuote} />    
}

export default DailyQuote;