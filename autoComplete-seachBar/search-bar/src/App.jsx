import { useEffect } from "react";
import { useState } from "react";

function App() {
  const [recipes, setRecipes] = useState([]);
  const [input, setInput] = useState("");
  const [showResults, setShowResults] = useState(false);
  const [cache, setCache] = useState({});

  const fetchData = async () => {
    if(cache[input]){
      setRecipes(cache[input]);
      return ;
    }
    console.log("api call");
    const data = await fetch(`https://dummyjson.com/recipes/search?q=${input}`);
    const result = await data.json();
    setRecipes(result?.recipes);
     setCache(prev=>({...prev, [input]: result?.recipes}))
  };

  useEffect(() => {
    const timer = setTimeout(fetchData, 300);
    return () => {
      clearTimeout(timer);
    };
  }, [input]);

  return (
    <div>
      <h1 className="font-bold text-center text-2xl my-5">
        Autocomplete Search Bar
      </h1>
      <div className="border rounded-lg w-1/2 mx-auto p-2">
        <input
          type="text"
          placeholder="search"
          className="outline-none"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onFocus={() => setShowResults(true)}
          onBlur={() => setShowResults(false)}
        />
      </div>
      {showResults && (
        <div className="w-1/2 mx-auto border border-black rounded-lg">
          {recipes?.map((r) => (
            <span
              key={r?.id}
              className="flex flex-col p-1 hover:cursor-pointer hover:bg-gray-200 hover:rounded-lg"
            >
              {r?.name}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
