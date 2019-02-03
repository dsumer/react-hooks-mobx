import React, { useState } from 'react';
import { PhaseStore, PhaseStoreContext } from '../stores/PhaseStore';
import Test from './Test';
import OtherTest from './OtherTest';

export default function PhaseApp() {
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
    <div>
      <button onClick={loadPhaseStoreFromJson}>Load From Json</button>
      <PhaseStoreContext.Provider value={phaseStore}>
        <Test/>
        <OtherTest/>
      </PhaseStoreContext.Provider>
    </div>
  )
}