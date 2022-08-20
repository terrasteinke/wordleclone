import './App.css';
import LetterRow from './LetterRow';
import WordList from './WordList';
import { useState, useEffect } from 'react';

const WORD_LIST_URL = "https://raw.githubusercontent.com/tabatkins/wordle-list/main/words";

const randomNumberInRange = (arrayLength) =>
  Math.floor(Math.random() * (arrayLength - 1));

function App() {

  const [wordsArray, setWordsArray] = useState([]);



  //const [wordStr, setWordStr] = useState("");
  const [guessNumber, setGuessNumber] = useState(1);
  const [wordStr1, setWordStr1] = useState("");
  const [wordStr2, setWordStr2] = useState("");
  const [wordStr3, setWordStr3] = useState("");
  const [wordStr4, setWordStr4] = useState("");
  const [wordStr5, setWordStr5] = useState("");
  const [wordStr6, setWordStr6] = useState("");
  const [justSubmitted, setJustSubmitted] = useState("");
  const [wordOfTheDay, setWordOfTheDay] = useState("");

  useEffect(() => {
    fetch(WORD_LIST_URL)
      .then((response) => response.text())
      .then((text) => {
        const wordsArr = text.split("\n");
        setWordsArray(wordsArr);
        console.log(wordsArr);
        const wordOfTheDay = wordsArr[randomNumberInRange(wordsArr.length)];
        setWordOfTheDay(wordOfTheDay);
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

  const handleSubmit = (event) => {
    if (getValue().length === 5) {
      event.preventDefault();
      setGuessNumber(guessNumber + 1);
      console.log({ wordOfTheDay });
      console.log({justSubmitted});
      if (justSubmitted === wordOfTheDay) {
        alert("you win");
        console.log("this was correct");
      }
    }
    else {
      event.preventDefault();
      setValue("");
      alert("Not enough letters");
    }
  }


  return (
    <div className="App">
      <header className="App-header">
        <p id="notlogo">Wordle Knockoff</p>
      </header>
      <div className='App-body'>
        <div className='flexContainer'>
          <LetterRow word={wordStr1} />
          <LetterRow word={wordStr2} />
          <LetterRow word={wordStr3} />
          <LetterRow word={wordStr4} />
          <LetterRow word={wordStr5} />
          <LetterRow word={wordStr6} />
        </div>
      </div>
      <form onSubmit={handleSubmit} >
        <input
          maxLength={5}
          onChange={(event) => setValue(event.target.value)}
          value={getValue()}>
        </input>
      </form>
      <footer className="App-footer">
        <button id="dark">Dark Mode</button>
        <button id="light">Light Mode</button>
      </footer>
    </div>
  );
}

export default App;
