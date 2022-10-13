
import React, {useState} from 'react'

function App() {

  const [maxValue, setMaxValue] = useState(2)
  const [random, setRandom] = useState()

  function handleChange(e) {
    setMaxValue(e.target.value)
  }

  function saveRandomNumber(e) {
    e.preventDefault();
    
    if(maxValue === undefined || maxValue<2 || maxValue === "" || isNaN(maxValue)){
      alert("Por favor introduzca solo numeros mayores a 1")
      return false
    }

    fetch(`https://www.random.org/integers/?num=1&min=1&max=${maxValue}&col=1&base=10&format=plain&rnd=new`)
      .then(res => res.json())
      .then(num => {
        setRandom(num)
        saveRandNumDB(num)
      })   
      
  }

  async function saveRandNumDB(num){
    
    await fetch("/api/randNum", {
        method: "POST",
        body: JSON.stringify({"num": num}),
        headers: {
            'Content-Type': 'application/json'
        }
    })

  }

  return (
    <form className="container sm mx-auto p-4 bg-gray-200 rounded-xl max-w-xl my-6" onSubmit={saveRandomNumber}>

      <p className="p-2 m-2 text-lg font-bold">Introduzca un n&uacute;mero mayor a 1, se obtendr&aacute; uno aleatorio utilizando el mismo como tope m&aacute;ximo.</p>

      <div className='flex gap-x-2 px-4 justify-center'>
        <label htmlFor="max" className="sr-only">N&uacute;mero</label>
        <input type="number" min="2" id="max" value={maxValue} onChange={handleChange} className="w-24 px-2" />
        <button type="submit" className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Obtener aleatorio</button>      
      </div>      
    
      <div className="p-4 my-4 text-sm text-green-700 bg-green-100 rounded-lg dark:bg-green-200 dark:text-green-800" role="alert">
        El n&uacute;mero aleatorio es <span className="font-semibold">{random || "-"}</span>
      </div>
      
    </form>
  );
}

export default App;
