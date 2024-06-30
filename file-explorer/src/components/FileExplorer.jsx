import React, { useState } from 'react'

const FileExplorer = ({ explorerData }) => {
    console.log(explorerData)
    const [fileStructure, setFileStructure] = useState(false);
    const [showInput , setShowInput] = useState({
        isFolder: false,
        visible: false
    })
    console.log(fileStructure)
    const handleNewFolder = (e, isFolder)=>{
       e.stopPropagation();
       setFileStructure(true);
       setShowInput({
        isFolder:isFolder,
        visible:true
       })
    } 
    return (
        <div>
            {explorerData.isFolder && (
                <div className='my-2'>
                    <div className='cursor-pointer w-1/2 flex justify-between' onClick={() => setFileStructure((prev) => !prev)}>
                        {
                            explorerData.isFolder && (
                                <span>
                                    📂 {explorerData.name}
                                </span>
                            )
                        }
                        <div className='flex gap-x-2'>
                            <button className='border border-black rounded shadow-sm bg-gray-300 w-1/2 text-sm p-2' onClick={(e)=>handleNewFolder(e,true)}>Folder+</button>
                            <button  className='border border-black rounded shadow-sm bg-gray-300 w-1/2 text-sm p-2' onClick={(e)=>handleNewFolder(e,false)}>File+</button>
                        </div>
                    </div>
                    {
                        showInput.visible && (
                            <div className=''>
                                <span>{showInput.isFolder? '📂':'📃'}</span>
                                <input className='border border-black rounded ml-1 px-1' autoFocus type='text' onBlur={()=>setShowInput({...showInput, visible:false})}/>
                            </div>
                        )
                    }
                    <div className='ml-7'>
                        {
                            fileStructure && explorerData.items.map((item) => (
                                // <div className='border'>{item.isFolder ? `📂 ${item.name}` : `📃 ${item.name}`}</div>
                                <FileExplorer explorerData={item} />
                            ))
                        }
                    </div>
                </div>
            )}{
                !explorerData.isFolder && (
                    <div>
                        <span>📃 {explorerData.name}</span>
                    </div>
                )
            }
        </div>
    )
}

export default FileExplorer
