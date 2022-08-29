import './App.css';
import LetterRow from './LetterRow';
import { useState, useEffect, useRef } from 'react';
import KeyboardDisplay from './KeyboardDisplay';
import Stats from './Stats';

const WORD_LIST_URL = "https://raw.githubusercontent.com/tabatkins/wordle-list/main/words";

const randomNumberInRange = (arrayLength) =>
  Math.floor(Math.random() * (arrayLength - 1));

function App() {

  const date = new Date();
  const todayKey = (
  `${date.getUTCFullYear()}-${date.getUTCMonth().toString().length < 2 
    ? '0' + date.getUTCMonth()
    : date.getUTCMonth()}-${date.getUTCDate().toString().length < 2
    ? '0' + date.getUTCDate()
    : date.getUTCDate()}`
  )

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
  
  const [displayTheme, setDisplayTheme] = useState(JSON.parse(localStorage.getItem('displayConstant')) ? JSON.parse(localStorage.getItem('displayConstant')) : "");
  const [headerDisplayTheme, setHeaderDisplayTheme] = useState(JSON.parse(localStorage.getItem('displayConstant')) ? JSON.parse(localStorage.getItem('displayConstant')) : "");
  const [bodyDisplayTheme, setBodyDisplayTheme] = useState(JSON.parse(localStorage.getItem('displayConstant')) ? JSON.parse(localStorage.getItem('displayConstant')) : "");

  const [finalGuessNumber, setFinalGuessNumber] = useState(0);
  const [isWin, setIsWin] = useState(false);
  const [winAmount, setWinAmount] = useState(JSON.parse(localStorage.getItem('winRate')) ? JSON.parse(localStorage.getItem('winRate')) : 0);
  const [isShown, setIsShown] = useState(false);
  const [currentWinStreak, setCurrentWinStreak] = useState(JSON.parse(localStorage.getItem('curWinStreak')) ? JSON.parse(localStorage.getItem('curWinStreak')) : 0)
  const [longestWinStreak, setLongestWinStreak] = useState(JSON.parse(localStorage.getItem('longWinStreak')) ? JSON.parse(localStorage.getItem('longWinStreak')) : 0)


  let getClass;

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

  const [isDisabled, setIsDisabled] = useState(false);

  const compareWord = () => {
    if (justSubmitted === wordOfTheDay) {
      alert("you win!")
      setFinalGuessNumber(guessNumber);
      setWinAmount(winAmount + 1);
      getStats();
      setWinRate(winRate + 1);
      setCurWinStreak(curWinStreak + 1);
      setIsWin(true);
        if (curWinStreak >= longWinStreak) {
          setLongWinStreak(curWinStreak + 1)
      }
      setIsDisabled(true);
    } 
  }

  const [winRate, setWinRate] = useState(winAmount);

  useEffect(() => {
    localStorage.setItem('winRate', JSON.stringify(winRate));
  }, [winRate])

  useEffect(() => {
    const winHistory = JSON.parse(localStorage.getItem('winRate'));
    if (winHistory) {
      setWinRate(winHistory);
    }
  }, []);
  
  const [curWinStreak, setCurWinStreak] = useState(currentWinStreak);

  useEffect(() => {
    localStorage.setItem('curWinStreak', JSON.stringify(curWinStreak));
  }, [curWinStreak])

  useEffect(() => {
    const winStreakHistory = JSON.parse(localStorage.getItem('curWinStreak'));
    if (winStreakHistory) {
      setCurWinStreak(winStreakHistory);
    }
  }, []);

  const [longWinStreak, setLongWinStreak] = useState(longestWinStreak);

  useEffect(() => {
    localStorage.setItem('longWinStreak', JSON.stringify(longWinStreak));
  }, [longWinStreak])

  useEffect(() => {
    const winStreakRecord = JSON.parse(localStorage.getItem('longWinStreak'));
    if (winStreakRecord) {
      setLongWinStreak(winStreakRecord);
    }
  }, []);

  const [displayConstant, setDisplayConstant] = useState(displayTheme);

  useEffect(() => {
    localStorage.setItem('displayConstant', JSON.stringify(displayConstant));
  }, [displayConstant]);

  useEffect(() => {
    const stillDisplayed = JSON.parse(localStorage.getItem('displayConstant'));
    if (stillDisplayed) {
      setDisplayConstant(stillDisplayed);
    }
  })

  const getStats = () => {
    setIsShown(true);
    }

  const handleSubmit = (event) => {
    if (guessNumber < 6) {
    if (getValue().length === 5) {
      if (wordsArray.includes(justSubmitted)) {
      event.preventDefault();
      setGuessNumber(guessNumber + 1);
      compareWord();
      console.log({ wordOfTheDay });
      console.log({justSubmitted});
      console.log({localStorage})
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
  } else if (guessNumber === 6) {
    event.preventDefault();
    if (justSubmitted != wordOfTheDay) {
    alert("Sorry, you did not win. The correct answer was: " + wordOfTheDay);
    setCurWinStreak(0);
    setIsDisabled(true);
    setIsShown(true);
    }
  }
  }

  const ref = useRef(null);

  useEffect(() => {
    if (displayConstant === "dark") {
      console.log("oh no it's dark!")
      setHeaderDisplayTheme("dark-header")
      setBodyDisplayTheme("body-dark")
    } else if (displayConstant === "light") {
      console.log("I'm turning out the lights")
      setHeaderDisplayTheme("light-header")
      setBodyDisplayTheme("light-body")
    } else {
      console.log("idk a catch-all?")
      setHeaderDisplayTheme("light-header")
      setBodyDisplayTheme("light-body")
    }
  }, [displayConstant])

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
        {isShown && <Stats winAmount={winAmount} finalGuessNumber={finalGuessNumber} winRate={winRate} longestWinStreak={longWinStreak} currentWinStreak={curWinStreak}/>}
        <div>
        <button id="dark" onClick={() => setDisplayConstant("dark")}>Dark Mode</button>
        <button id="light" onClick={() => setDisplayConstant("light")}>Light Mode</button>
        </div>
      </div>
      <form onSubmit={handleSubmit} >
        <input
        disabled={isDisabled}
        className="invisible-input"
        ref={ref}
          maxLength={5}
          onChange={(event) => setValue(event.target.value)}
          value={getValue()}>
        </input>
      </form>
      <footer className="App-footer">
      </footer>
    </div>
  );
}

export default App;
