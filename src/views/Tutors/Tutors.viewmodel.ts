import { makeObservable, observable } from "mobx";
import { Service } from "typedi";

@Service()
export class TutorsViewModel {

  @observable
  focusedIndex?: number;

  constructor() {
    makeObservable(this);
  }

  setFocusedIndex = (focusedIndex: number) => {
    if( this.focusedIndex != focusedIndex ) this.focusedIndex = focusedIndex;
  }

}

export const TutorsViewModelInstance = new TutorsViewModel();
