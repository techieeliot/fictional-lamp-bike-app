import {useState, useEffect} from 'react'

export const useGoodDayIndex = ( high, low, rain, wind) => {
    const [goodDayIndex, setGoodDayIndex] = useState(true)
    // useEffect(function persistIndex() {
        if (high <= 100 && low >= 32 && rain <= 50 && wind <=25 ){
            localStorage.setItem('goodDayIndexData', goodDayIndex);
            return setGoodDayIndex(true)
        } else{
            localStorage.setItem('goodDayIndexData', goodDayIndex);
            return setGoodDayIndex(false)
        }
    // });
    

}