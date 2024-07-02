import { useState } from 'react'
import './App.css'

function App() {
  const [checkboxData, setCheckboxData] = useState([
    { title: "Include Uppercase Letters", state: false },
    { title: "Include Lowercase Letters", state: false },
    { title: "Include Numbers", state: false },
    { title: "Include Symbols", state: false }
  ]);
  return (
    <div className='flex flex-col justify-center items-center'>
      <h1 className='font-semibold text-3xl mb-4'>Password generator with React</h1>
      <div className='bg-gray-800 text-white w-5/6 lg:w-4/6 p-3 rounded-lg'>
        <div className='flex justify-between items-center p-3'>
          <h2 className='font-semibold text-2xl'>kjkshcjksdh</h2>
          <button className='bg-teal-700 p-2 rounded-md'>Copy</button>
        </div>

        <div className='font-semibold text-2xl flex justify-between items-center p-3'>
          <h2>Character Length</h2>
          <h2>7</h2>
        </div>
        <div className='p-3'>
          <input id="default-range" type="range" max="20" min="4" className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700" />
        </div>
        <div className='flex flex-wrap items-center p-3 gap-y-3'>
          {/* <div className='w-1/2 flex flex-start gap-x-2'>
            <input type='checkbox' />
            <span>Include Uppercase Letters</span>
          </div>
          <div className='w-1/2 flex flex-start gap-x-2'>
            <input type='checkbox' />
            <span>Include Lowercse Letters</span>
          </div>
          <div className='w-1/2 flex flex-start gap-x-2'>
            <input type='checkbox' />
            <span>Include Numbers</span>
          </div>
          <div className='w-1/2 flex flex-start gap-x-2'>
            <input type='checkbox' />
            <span>Include Symbols</span>
          </div> */}

          {
            checkboxData.map((checkBox, i)=>(
              <div className='w-1/2 flex flex-start gap-x-2'>
                {checkBox.title}
              </div>
            ))
          }
        </div>

        <div className='text-xl flex justify-between items-center p-3'>
           <h3>Strength:</h3>
           <h3>Medium</h3>
        </div>
        <div className='p-3'>
        <button className='bg-teal-700 w-full p-3 rounded text-xl hover:opacity-90'>Generate Password</button>
        </div>
      </div>
    </div>

  )
}

export default App
