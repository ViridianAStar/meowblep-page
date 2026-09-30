import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import { FaRegFile } from 'react-icons/fa';
import { SiCplusplus, SiC, SiPython, SiRust, SiFedora, SiJavascript } from 'react-icons/si';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <section id="top"> 
        <div className="flex">
          {/* <img src={heroImg} className="base" width="170" height="179" alt="" /> */}
          <img src={"/flaminglaptop.jpg"} className="base" alt="a laptop on fire" style={{ paddingTop: "20px" }} />
        </div>
        <div>
          <h1>Welcome to the meowblep.com home page</h1>
          <p>
            You can checkout <code>interesting code</code> and other content below!
          </p>
        </div>
        <button
          type="button"
          className="counter"
          onClick={() => setCount((count) => { if (count % 2 == 1 && count > 1) return (count*3)+1; else if (count > 1) return (count/2); else return Math.floor(Math.random() * 100) + 1;})}
        >
          Count is {count}
        </button>
      </section>

      <div className="ticks"></div>

      <section id="tech-stack">
        <div id="docs">
          <FaRegFile className="icon" role="presentation" aria-hidden="true" />
          <h2>Programming Languages And Technologies Used</h2>
          <p>Languages and frameworks/technologies used across my projects</p>
          <ul>
            <li>
              <a href="https://cppreference.com/" target="_blank">
                <SiCplusplus size={40} color="#00599C" />
              </a>
            </li>
            <li>
              <a href="https://www.gnu.org/software/gnu-c-manual/gnu-c-manual.html" target="_blank">
                <SiC size={40} color="#00599C" />
              </a>
            </li>
            <li>
              <a href="https://docs.python.org/3/reference/index.html" target="_blank">
                <SiPython size={40} color="#306998" />
              </a>
            </li>
            <li>
              <a href="https://doc.rust-lang.org/reference/" target="_blank">
                <SiRust size={40} color="#c55d22" />
              </a>
            </li>
            <li>
              <a href="https://fedoraproject.org/" target="_blank">
                <SiFedora size={40} color="#294172" />
              </a>
            </li>
            <li>
              <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
                <SiJavascript size={40} color="#F7DF1E" />
              </a>
            </li>                                                
          </ul>
        </div>
        <div id="githubs">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#social-icon"></use>
          </svg>
          <h2>Check out my work!</h2>
          <p>Feel free to explore, fork or even ask to join on my organization Open Development Space!</p>
          <ul>
            <li>
              <a href="https://github.com/ViridianAStar" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#github-icon"></use>
                </svg>
                Personal GitHub
              </a>
            </li>
            <li>
              <a href="https://github.com/Open-Development-Space" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#github-icon"></use>
                </svg>
                Open Development Space GitHub
              </a>
            </li>
            <li>
              <a href="https://github.com/TricoLTD" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#github-icon"></use>
                </svg>
                TricoLTD Github (Collaborator on)
              </a>
            </li>
            <li>
              <a href="https://github.com/WMR-VEX-Robotics" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#github-icon"></use>
                </svg>
                Highschool Robotics Team Github
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

export default App
