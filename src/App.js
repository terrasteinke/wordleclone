import './App.css';
import LetterRow from './LetterRow';
import { useState, useEffect, useRef } from 'react';
import KeyboardDisplay from './KeyboardDisplay';

const WORD_LIST_URL = "https://raw.githubusercontent.com/tabatkins/wordle-list/main/words";

const randomNumberInRange = (arrayLength) =>
  Math.floor(Math.random() * (arrayLength - 1));

function App() {

  const [wordsArray, setWordsArray] = useState([]);
  
  const [guessNumber, setGuessNumber] = useState(1);
  
  const [wordStr1, setWordStr1] = useState("");
  const [wordStr2, setWordStr2] = useState("");
  const [wordStr3, setWordStr3] = useState("");
  const [wordStr4, setWordStr4] = useState("");
  const [wordStr5, setWordStr5] = useState("");
  const [wordStr6, setWordStr6] = useState("");
 
  const [justSubmitted, setJustSubmitted] = useState("");
  const [wordOfTheDay, setWordOfTheDay] = useState("");
  
  const [displayTheme, setDisplayTheme] = useState("");
  const [headerDisplayTheme, setHeaderDisplayTheme] = useState("");
  const [bodyDisplayTheme, setBodyDisplayTheme] = useState("");

  useEffect(() => {
    fetch(WORD_LIST_URL)
      .then((response) => response.text())
      .then((text) => {
        const wordsArr = text.split("\n");
        setWordsArray(wordsArr);
        console.log(wordsArr);
        const wordOfTheDay = wordsArr[randomNumberInRange(wordsArr.length)];
        setWordOfTheDay(wordOfTheDay);
        console.log(wordOfTheDay);
      })
      .catch(err => console.error(err));
  }, []);

  const getValue = () => {
    if (guessNumber === 1) {
      return wordStr1;
    }
    if (guessNumber === 2) {
      return wordStr2;
    }
    if (guessNumber === 3) {
      return wordStr3;
    }
    if (guessNumber === 4) {
      return wordStr4;
    }
    if (guessNumber === 5) {
      return wordStr5;
    }
    if (guessNumber === 6) {
      return wordStr6;
    }
  }

  const setValue = (value) => {
    if (guessNumber === 1) {
      setWordStr1(value);
      setJustSubmitted(value);
    }
    if (guessNumber === 2) {
      setWordStr2(value);
      setJustSubmitted(value);

    }
    if (guessNumber === 3) {
      setWordStr3(value);
      setJustSubmitted(value);

    }
    if (guessNumber === 4) {
      setWordStr4(value);
      setJustSubmitted(value);

    }
    if (guessNumber === 5) {
      setWordStr5(value);
      setJustSubmitted(value);

    }
    if (guessNumber === 6) {
      setWordStr6(value);
      setJustSubmitted(value);

    }
  }

let getClass;

  const compareWord = () => {
    if (justSubmitted === wordOfTheDay) {
      alert("you win!")
    }
  }

  const handleSubmit = (event) => {
    if (getValue().length === 5) {
      if (wordsArray.includes(justSubmitted)) {
      event.preventDefault();
      setGuessNumber(guessNumber + 1);
      compareWord();
      console.log({ wordOfTheDay });
      console.log({justSubmitted});
      }
      else {
        event.preventDefault();
        setValue("");
        alert("Not a word");
    }} else {
      event.preventDefault();
      setValue("");
      alert("Not enough letters");
    }
  }

  const ref = useRef(null);

  useEffect(() => {
    if (displayTheme === "dark") {
      console.log("oh no it's dark!")
      setHeaderDisplayTheme("dark-header")
      setBodyDisplayTheme("body-dark")
    } else if (displayTheme === "light") {
      console.log("I'm turning out the lights")
      setHeaderDisplayTheme("light-header")
      setBodyDisplayTheme("light-body")
    } else {
      console.log("idk a catch-all?")
      setHeaderDisplayTheme("light-header")
      setBodyDisplayTheme("light-body")
    }
  }, [displayTheme])

  useEffect(() => {
    ref.current.focus();
  }, [])

    return (
    <div className="App">
      <header className={headerDisplayTheme}>
        <p id="notlogo">Wordle Knockoff</p>
      </header>
      <div className={bodyDisplayTheme}>
        <div className='flexContainer'>
          <LetterRow word={wordStr1} correctWord={wordOfTheDay} getClass={getClass} />
          <LetterRow word={wordStr2} correctWord={wordOfTheDay} getClass={getClass}/>
          <LetterRow word={wordStr3} correctWord={wordOfTheDay} getClass={getClass}/>
          <LetterRow word={wordStr4} correctWord={wordOfTheDay} getClass={getClass}/>
          <LetterRow word={wordStr5} correctWord={wordOfTheDay} getClass={getClass}/>
          <LetterRow word={wordStr6} correctWord={wordOfTheDay} getClass={getClass}/>
        </div>
        <div className='flexContainer'>
          <KeyboardDisplay />
        </div>
      </div>
      <form onSubmit={handleSubmit} >
        <input
        className="invisible-input"
        ref={ref}
          maxLength={5}
          onChange={(event) => setValue(event.target.value)}
          value={getValue()}>
        </input>
      </form>
      <footer className="App-footer">
        <button id="dark" onClick={() => setDisplayTheme("dark")}>Dark Mode</button>
        <button id="light" onClick={() => setDisplayTheme("light")}>Light Mode</button>
      </footer>
    </div>
  );
}

export default App;
