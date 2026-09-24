import { useState , useEffect} from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './css/App.css'
import MovieCard from "./components/moviecard"
import Home from "./pages/home"
import Favorite from "./pages/favorites"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import NavBar from "./components/NavBar"

// this is a default export, so you can name it whatever you want when importing it in another file, but the name should be the same as the function name in this file
// another way to export a function is to use named export, which is done by adding the export keyword before the function name, like this: export function MovieCard() { ... }
// so the import statement would be import { MovieCard } from "./components/moviecard" instead of import MovieCard from "./components/moviecard"
  //const movieNumber = 1;
  //if (movieNumber === 1) {
  //  return ( or instead of having multiple return statements, you can use a conditional operator to return different JSX based on the value of movieNumber
  //    <div>
  //     {movieNumber === 1 ? (<MovieCard movie={{title: "Tim's film", release_date: "2023-01-01"}} />) : (<MovieCard movie={{title: "Tim's film1 ", release_date: "2023-01-01"}} />)}
  //    </div>
  //  )
  //}
function App() {
  return(
    <div className="App">
      <NavBar />
    <main className="main-content">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favorites" element={<Favorite />} />
      </Routes>
    </main>
    </div>
  )
}
export default App
/*    <>
      {movieNumber === 2 ? (
      <MovieCard movie={{title: "Tim's film", release_date: "2023-01-01"}} />) : (
      <MovieCard movie={{title: "Tim's film1 ", release_date: "2023-01-01"}} />)}
      {movieNumber ===3 && (<MovieCard movie={{title: "Tim's film2 ", release_date: "2023-01-01"}} />)} 
      <MovieCard movie={{title: "Tim's film3", release_date: "2023-01-01"}} />
      <MovieCard movie={{title: "Tim's film4", release_date: "2023-01-01"}} />
      <MovieCard movie={{title: "Tim's film5", release_date: "2023-01-01"}} />
      <MovieCard movie={{title: "Tim's film6", release_date: "2023-01-01"}} />
      <MovieCard movie={{title: "Tim's film7", release_date: "2023-01-01"}} />
      <MovieCard movie={{title: "Tim's film8", release_date: "2023-01-01"}} />
    </>*/
//or you can use <Text />  or <Text></Text> to call the function
/*function Text({displayText}) {
  return (
      <div>  
        <p>{displayText}</p>
      </div>
  );
}
*/
/*
  return (
  <>
    <div>  
      <Text displayText = "hello world"></Text>    
    </div>
    <div>
      <Text displayText="hello world function" /> 
      
    </div>

  </>
  );*/ 
// const [count, setCount] = useState(() => {
 // return Number(localStorage.getItem("count")) || 0;
//}); // this return could be only 0 if you want the counter to reset on every refresh, but then you will lose the count value on refresh
//  useEffect(() => {
//  localStorage.setItem("count", count);
//}, [count]);
// to restart a counter, you can clear the local storage by running localStorage.clear() in the console
// or you can remove the useeffect and the localStorage.setItem line, but then the counter will reset on every refresh
/*  return (
    <>
      <section id="center">
        <div className="hero">
          <img src={heroImg} className="base" width="170" height="179" alt="" />
          <img src={reactLogo} className="framework" alt="React logo" />
          <img src={viteLogo} className="vite" alt="Vite logo" />
        </div>
        <div>
          <h1>Get started</h1>
          <p>
            Edit <code>src/App.jsx</code> and save to test <code>HMR</code>
          </p>
        </div>
        <button
          type="button"
          className="counter"
          onClick={() => setCount((count) => count + 1)}
        >
          Count is {count}
        </button>
      </section>
*/
/*      <div className="ticks"></div>

      <section id="next-steps">
        <div id="docs">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#documentation-icon"></use>
          </svg>
          <h2>Documentation</h2>
          <p>Your questions, answered</p>
          <ul>
            <li>
              <a href="https://vite.dev/" target="_blank">
                <img className="logo" src={viteLogo} alt="" />
                Explore Vite
              </a>
            </li>
            <li>
              <a href="https://react.dev/" target="_blank">
                <img className="button-icon" src={reactLogo} alt="" />
                Learn more
              </a>
            </li>
          </ul>
        </div>
        <div id="social">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#social-icon"></use>
          </svg>
          <h2>Connect with us</h2>
          <p>Join the Vite community</p>
          <ul>
            <li>
              <a href="https://github.com/vitejs/vite" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#github-icon"></use>
                </svg>
                GitHub
              </a>
            </li>
            <li>
              <a href="https://chat.vite.dev/" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#discord-icon"></use>
                </svg>
                Discord
              </a>
            </li>
            <li>
              <a href="https://x.com/vite_js" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#x-icon"></use>
                </svg>
                X.com
              </a>
            </li>
            <li>
              <a href="https://bsky.app/profile/vite.dev" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#bluesky-icon"></use>
                </svg>
                Bluesky
              </a>
            </li>
          </ul>
        </div>
      </section>

      <div className="ticks"></div>
      <section id="spacer"></section>
    </>
  )
}
*/
//export default App