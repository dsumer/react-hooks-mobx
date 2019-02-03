import React, { useContext } from 'react';
import { Observer } from 'mobx-react-lite';
import { PhaseStoreContext } from '../stores/PhaseStore';

export default function OtherTest() {
  const phaseStore = useContext(PhaseStoreContext);

  return (
    <div>
      othertest&nbsp;
      <Observer>
        {() => (
          <span>{phaseStore.showHint.toString()}</span>
        )}
      </Observer>
    </div>
  );
}