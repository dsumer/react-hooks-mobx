import React, { ChangeEvent } from 'react';
import { Observer } from 'mobx-react-lite';
import { Phase } from '../stores/PhaseStore';

interface PhaseViewProps {
  phase: Phase
}

const PhaseView: React.FC<PhaseViewProps> = ({phase}) => {
  function changeName(event: ChangeEvent<HTMLInputElement>) {
    phase.name = event.target.value;
  }

  return (
    <Observer>
      {() => (
        <div>
          <input type="text" value={phase.name} onChange={changeName}/>
        </div>
      )}
    </Observer>
  );
}

export default PhaseView;