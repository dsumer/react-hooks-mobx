import React, { useContext } from 'react';
import { Observer } from 'mobx-react-lite';
import { PhaseStoreContext } from '../stores/PhaseStore';
import PhaseView from './PhaseView';

export default function Test() {
  const phaseStore = useContext(PhaseStoreContext);

  return (
    <div>
      test <button onClick={phaseStore.toggleHint}>doit</button>
      <button onClick={phaseStore.addPhase}>Add Phase</button>
      <Observer>
        {() => (
          <div>
            {phaseStore.phases.map((phase) => <PhaseView key={phase.id} phase={phase}/>)}
          </div>
        )}
      </Observer>
    </div>
  );
}