import React, { useEffect, useState } from 'react'

const ProgressBar = ({ value = 0 }) => {
    const [percent, setPercent] = useState(value);

    useEffect(() => {
        setPercent(Math.min(100, Math.max(value, 0)))
    }, [value])
    return (
        <div className="flex flex-col justify-center items-center gap-y-4">
            <h1 className="font-bold text-2xl">Progress Bar</h1>
            <div className="relative border w-1/2 rounded-full bg-gray-200 h-8">
                <div className="bg-green-500 rounded-full h-full" style={{ width: `${percent}%` }}></div>
                <span className={`absolute inset-0 flex justify-center items-center text-${percent < 49 ? 'black' : 'white'}`}>
                    {percent.toFixed()}%
                </span>
            </div>
        </div>


    )
}

export default ProgressBar
