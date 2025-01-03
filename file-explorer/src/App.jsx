import { useEffect, useState } from 'react'
import FileExplorer from './components/FileExplorer'
import explorer from './data/data';

function App() {
  const [explorerData, setExplorerData] = useState(explorer);
  const [apiData, setApiData] = useState([]);
  const [page, setPage] = useState(1);

  const fetchApiData = async () => {
    const res = await fetch(`https://dummyjson.com/products?limit=100`)
    const data = await res.json();
    if (data && data.products) {
      setApiData(data.products);
    }
  }
  console.log(apiData)
  useEffect(() => {
    fetchApiData();
  }, [])

  const selectedPage = (pageNum)=>{
    if(pageNum>=1 && pageNum<=apiData.length / 10 && pageNum!=page){
      setPage(pageNum)
    }
  }
  return (
    <>
      {/* {
        apiData.length > 0 && (
          <div className='grid grid-cols-4 gap-4 m-6'>
            {apiData.slice(page * 10 - 10, page * 10).map((product) => (
              <span key={product.id} className='flex flex-col items-center justify-center bg-gray-200 rounded-md p-2'>
                <img src={product.thumbnail} alt={product.title} />
                <span className='font-semibold'>{product.title}</span>
              </span>
            ))}
          </div>
        )
      }
       {
              apiData.length > 0 && (
                <div className='w-full flex items-center justify-center gap-x-3 text-xl'>
                  <span onClick={()=>setPage(page-1)} className={`${page>1?'': 'invisible' } cursor-pointer`}>◀</span>
                  {
                    [...Array(apiData.length / 10)].map((_, i) => (
                      <span className={`hover:text-blue-700 cursor-pointer ${page === (i + 1) ? 'font-bold' : ''}`} onClick={()=>selectedPage(i+1)}>{i + 1}</span>
                    ))
                  }
                  <span className={`${page<(apiData.length/10)?'': 'invisible' } cursor-pointer`} onClick={()=>setPage(page+1)}>▶</span>
                </div>
              )
            } */}
      <FileExplorer explorerData={explorerData}/>
    </>
  )
}

export default App
