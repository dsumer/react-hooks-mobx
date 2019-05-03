import React from "react";
import { action, observable } from "mobx";

let phaseIdCounter = 3;

export interface Phase {
  id: number;
  name: string;
  date?: Date;
}

export class PhaseStore {
  @observable public showHint = false;
  @observable public phases: Phase[] = [];

  @action.bound
  toggleHint() {
    this.showHint = !this.showHint;
  }

  @action.bound
  addPhase() {
    this.phases.push({
      id: phaseIdCounter++,
      name: 'oha'
    });
  }
}

export const PhaseStoreContext = React.createContext(new PhaseStore());