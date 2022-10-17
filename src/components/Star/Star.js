import React from 'react'
import './star.css'
import { AiFillStar,AiOutlineStar } from 'react-icons/ai'

const StarContainer = () => {
    const color = "#90ddae"
    return (
        <div className="star_area">
            <AiFillStar size={20} color={color}/>
            <AiFillStar size={20} color={color}/>
            <AiFillStar size={20} color={color}/>
            <AiFillStar size={20} color={color}/>
            <AiOutlineStar size={20} color={color}/>
        </div>
    )
}
export default StarContainer