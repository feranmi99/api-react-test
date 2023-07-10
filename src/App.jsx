import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'

function App() {
  const [URL, setURL] = useState([])
  let endpoint = "https://v2.jokeapi.dev/joke/Any"
  const fetchRandomBlogPost = () => {
    axios.get(endpoint)
      .then((response) => {
        console.log(response.data.setup);
        setURL(response.data.setup)
        console.log(URL);
      })
      .then((err) => {
        console.log(err);
      })
  }

  return (
    <>
      <div className='mx-auto'>
        <button className='inline-flex m-20 text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg' onClick={fetchRandomBlogPost}>Click Me</button> <br />

      </div>
      <div className="card mx-auto">
        <h4>
        <b className='text-center mx-auto'>Joke API</b>
        <p className='text-center font-medium text-lg p-5 border border-gray-500 shadow-lg rounded-lg text-xl font-bold text-white font-serif'>{URL}</p>
        </h4>
      </div>
    </>
  )
}

export default App
