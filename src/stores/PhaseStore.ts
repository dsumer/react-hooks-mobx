import React from "react";
import { action, observable } from "mobx";

let phaseIdCounter = 0;

export class Phase {
  public id: number;
  @observable public name: string;
  public date: Date;

  constructor(data: any) {
    this.id = phaseIdCounter++;
    this.name = data.name;
    this.date = data.date;
  }
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
    this.phases.push(new Phase({name: 'oha'}));
  }

  static deserialize(data: any) {
    const phaseStore = new PhaseStore();
    phaseStore.showHint = data.showHint;
    if (data.phases) {
      phaseStore.phases = data.phases.map((phase: any) => new Phase(phase));
    }
    return phaseStore;
  }
}

export const PhaseStoreContext = React.createContext(new PhaseStore());