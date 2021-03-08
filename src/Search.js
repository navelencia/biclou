import React, { useState } from 'react';
import { IconContext } from "react-icons";
import { BsArrowRight, BsChevronLeft, BsCheck } from "react-icons/bs";

import './Search.scss';

function Search ({ startAddress, endAddress, onInputSubmission }) {
    const [searching, setSearching] = useState({ searching: false, type: '' });
    const [inputField, setInputField] = useState('');

    const submit = () => {
        onInputSubmission(searching.type, inputField);
        setSearching({ searching: false, type: '' })
        setInputField('')
    }

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            submit();
        }
    }

    return (
        <div id="search">
            { searching.searching === false ?  
                <React.Fragment>         
                    <div className="field" onClick={() => setSearching({ searching: true, type: 'start' })}>{ startAddress }</div>
                    <div className="arrow">
                        <IconContext.Provider value={{ className: "destination-icon" }}>
                            <BsArrowRight/>
                        </IconContext.Provider>
                    </div>
                    <div className="field" onClick={() => setSearching({ searching: true, type: 'end' })}>{ endAddress }</div>
                </React.Fragment>
            : 
                <React.Fragment>
                    <div onClick={() => { setSearching({ searching: false, type: '' }); setInputField('') }}>
                        <IconContext.Provider value={{ className: "close-field-icon" }}>
                            <BsChevronLeft/>
                        </IconContext.Provider>
                    </div>
                    <input
                        value={inputField}
                        onChange={(e) => setInputField(e.target.value)}
                        onKeyDown={handleKeyDown}
                        type="text"
                        placeholder="Enter location..."
                    ></input>
                    <button onClick={submit}>
                        <IconContext.Provider value={{ className: "input-field-icon" }}>
                            <BsCheck/>
                        </IconContext.Provider>
                    </button>
                </React.Fragment>
            }
        </div>
    )
}

export default Search;