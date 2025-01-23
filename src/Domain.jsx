import React, {useState} from "react";
import generator from '@rstacruz/startup-name-generator';
function Domain() {
    const [input, setInput] = useState('');
    const [names, setNames] = useState([]);

    function handleInputChange(event) {
        setInput(event.target.value)
    }

    function generateNames() {
        const generateNames = generator(input);
        const limitedNames = generateNames.slice(0, 50)
        setNames(limitedNames);
    }

    function checkDomain(name) {
        const url = `https://www.namecheap.com/domains/registration/results/?domain=${name}`;
        window.open(url, '_blank');
    }

    return(
        <div className="container">
            <h1>Name Your Domain</h1>
            <div className="inputabtn">
                <input type="text" onChange={handleInputChange} value={input} placeholder="Type Keyword"/>
                <button onClick={generateNames}>Generate</button>
            </div>
            
            <ul className="list-cont">
                {names.map((name, index) => 
                    <li key={index} onClick={() => checkDomain(name)}>
                        {name}
                    </li>
                )}
            </ul>
        </div>
    )
}
export default Domain