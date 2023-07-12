import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'

function App() {
  const [URL, setURL] = useState("");
  const [Data2, setData2] = useState("");
  const [Data, setData] = useState("");
  let endpoint = "https://v2.jokeapi.dev/joke/Any";
  const fetchRandomBlogPost = () => {
    axios.get(endpoint)
      .then((response) => {
        // console.log(response);
        // console.log(response.data.category);
        // console.log(response.data.delivery);
        // console.log(response.data.setup);

        setURL(response.data.setup)
        setData2(response.data.delivery)
        setData(response.data.category)
        // console.log(URL);
      })
      .then((err) => {
        console.log(err);
      })
  }

  return (
    <>
    <div className='bg-sky-500'>
      <div className='mx-auto'>
        <button className='inline-flex m-20 text-white bg-indigo-700 border-0 py-2 px-6 font-bold focus:outline-none hover:bg-indigo-600 rounded text-lg' onClick={fetchRandomBlogPost}>Click Me</button> <br />

      </div>
      <marquee behavior="" direction="">
        <p className='text-center font-bold my-3 text-2xl'>Joke API It can generate random joke</p>
        
      </marquee>
      <div className="card mx-auto">
        <h4>
        <p className='text-start underline underline-offset-4 font-mono font-medium text-lg px-3 py-3 shadow-lg rounded-lg text-xl font-bold text-white font-serif'>{Data}</p>
        <p className='text-start font-medium text-lg p-5 rounded-lg font-bold text-white font-serif'>{URL}</p>
        <p className='text-start font-medium text-lg p-5 rounded-lg font-bold text-white font-serif'>{Data2}</p>
        </h4>
      </div>
    </div>
    </>
  )
}

export default App
