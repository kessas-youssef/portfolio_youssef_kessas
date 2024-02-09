import { useState } from "react";
import Header from "./Components/Header";
import Intro from "./Components/Intro";

function App() {
  const [cursor, setCursor] = useState({ x: 0, y: 0 })
  function update(e) {
    setCursor({x: e.clientX || (e.touches!== undefined && e.touches[0].clientX) || cursor, y : e.clientY || (e.touches!== undefined && e.touches[0].clientY) || cursor})

    document.documentElement.style.setProperty('--cursorX', cursor.x + 'px')
    document.documentElement.style.setProperty('--cursorY', cursor.y + 'px')
    // document.documentElement.style.setProperty('--cursorY', y + 'px')
  }

  document.addEventListener('mousemove', update)
  document.addEventListener('touchmove', update)

  return (
    <div className="app">
      <Header />
      <Intro />
    </div>
  );
}

export default App;
