import React, { useContext, useState } from 'react';
import { Observer } from "mobx-react-lite";
import { PhaseStore, PhaseStoreContext } from "./stores/PhaseStore";
import logo from './logo.svg';
import './App.css';

function Test() {
  const phaseStore = useContext(PhaseStoreContext);

  return (
    <div>
      test <button onClick={phaseStore.toggleHint}>doit</button>
      <button onClick={phaseStore.addPhase}>Add Phase</button>
      <Observer>
        {() => (
          <div>
            {phaseStore.phases.map((phase) => <div>{phase.name}</div>)}
          </div>
        )}
      </Observer>
    </div>
  );
}

function OtherTest() {
  const phaseStore = useContext(PhaseStoreContext);

  return (
    <div>
      othertest&nbsp;
      <Observer>
        {() => (
          <React.Fragment>{phaseStore.showHint.toString()}</React.Fragment>
        )}
      </Observer>
    </div>
  );
}

function App() {
  const [phaseStore, setPhaseStore] = useState(new PhaseStore());

  function loadPhaseStoreFromJson() {
    const json = {
      showHint: true,
      phases: [
        {
          name: 'lol'
        },
        {
          name: 'hehe'
        }
      ]
    };

    setPhaseStore(PhaseStore.deserialize(json));
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo"/>
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <button onClick={loadPhaseStoreFromJson}>Load From Json</button>
        <PhaseStoreContext.Provider value={phaseStore}>
          <Test/>
          <OtherTest/>
        </PhaseStoreContext.Provider>
      </header>
    </div>
  );
}

export default App;
