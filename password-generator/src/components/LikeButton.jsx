import React, { useState } from 'react'
import { CiHeart } from "react-icons/ci";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

const LikeButton = () => {
    const [liked, setLiked] = useState(false);
    const [isFetching, setIsFetching] = useState(true);
    const [error, setError] = useState(null );
    
    const handleLikeUnlike = async()=>{
        setError(null);
        setIsFetching(true);

        try{
            const response = await fetch('https://www.greatfrontend.com/api/questions/like-button',{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    action:liked?'unlike':'like'
                })
            })
            if (response.status >= 200 && response.status < 300) {
                setIsFetching(false);
                setLiked(!liked);
              } else {
                setIsFetching(false);
                const res = await response.json();
                setError(res.message);
                return;
              }
        }catch (err){
            setIsFetching(false);  
        }
    }  
   
    return (
        <>
        <div className={`border border-red-500 rounded-full px-3 py-1 w-24 flex items-center justify-between disabled={${isFetching}}
           m-4 ${liked? 'bg-red-500 text-white':'bg-white text-red-500'}`} onClick={handleLikeUnlike}>
            {isFetching ? <AiOutlineLoading3Quarters size={24}/> : <CiHeart size={24}/>}
            <button className='text-lg font-bold'>{liked ? 'liked' : 'like'}</button>
        </div>
         {
            error && <div>{error}</div>
        }
        </>
    )
}

export default LikeButton
