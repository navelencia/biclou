import React, { useState } from 'react';

import './App.scss';
import Search from './Search';
import Counters from './Counters';

function App() {
  const [startAddress, setStartAddress] = useState('A');
  const [endAddress, setEndAddress] = useState('B');

  function handleSearchInputSubmission (type, value) {
    if (type === 'start') setStartAddress(value);
    if (type === 'end') setEndAddress(value);
  }

  return (
    <div className="App">
      <section id="right">

      </section>
      <section id="left">
        <div className="mb-1">
          <Search
            startAddress={startAddress}
            endAddress={endAddress}
            onInputSubmission={handleSearchInputSubmission}
          />
        </div>
        <div className="mb-1">
          <Counters/>
        </div>
      </section>
    </div>
  );
}

export default App;
