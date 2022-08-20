import { useState, useEffect } from 'react';


const WordList = ({}) => {

    const [list, setList] = useState([]);
    const [id, setId] = useState(0);


   useEffect(() => {
        fetch('https://raw.githubusercontent.com/tabatkins/wordle-list/main/words')
        //need a for loop inside of .then
            .then(({ results }) => setList(...list, { word: results, id:id }));
            setId(id + 1);
      }, []);


return (
    <div>
        <h1>Fetch data from an api in react</h1>
        <ul>
                        {list.map(item => (
                            <li key={item.id} className="list-item">{item.Word}</li>
                        ))}
                    </ul>
    </div>
    )
    
};

    export default WordList.js