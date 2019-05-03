import React from 'react';
import { PhaseStore, PhaseStoreContext } from '../stores/PhaseStore';
import Test from './Test';
import OtherTest from './OtherTest';

const phaseStore = new PhaseStore();

export default function PhaseApp() {
  function loadPhaseStoreFromJson() {
    const json = {
      showHint: true,
      phases: [
        {
          id: 1,
          name: 'lol'
        },
        {
          id: 2,
          name: 'hehe'
        }
      ]
    };

    phaseStore.showHint = json.showHint;
    phaseStore.phases = json.phases;
  }

  return (
    <div>
      <button onClick={loadPhaseStoreFromJson}>Load From Json</button>
      <PhaseStoreContext.Provider value={phaseStore}>
        <Test/>
        <OtherTest/>
      </PhaseStoreContext.Provider>
    </div>
  )
}