import { useEffect, useRef, useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

// exemple 1 when we click on abutton we focus an input without rerender another page
function App() {
  const inputref = useRef();

  // used to console the value of input ref after the component is mounted if not inputref is undefined
  useEffect(() => {
    console.log(inputref.current);
  }, []);
  function handle() {
    inputref.current.focus();
  }
  return (
    <div>
      <input type="text" ref={inputref} />
      <button
        onClick={() => {
          handle();
        }}
      >
        Click Me
      </button>
    </div>
  );
}

export default App;

//exemple 2 when we click on a button we highlight a paragraphe without rerender the page

// function HighlightButton() {
//   const paragraphRef = useRef(null);

//   const handleHighlight = () => {
//     // Utilisation de useRef pour accéder à l'élément <p> et appliquer un style
//     if (paragraphRef.current) {
//       paragraphRef.current.style.backgroundColor = 'yellow';
//     }
//   };

//   return (
//     <div>
//       <p ref={paragraphRef}>Ce paragraphe peut être mis en surbrillance</p>
//       <button onClick={handleHighlight}>Mettre en surbrillance</button>
//     </div>
//   );
// }

// export default HighlightButton;
