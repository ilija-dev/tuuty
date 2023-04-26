import { makeObservable, observable } from 'mobx';
import { Service } from 'typedi';

@Service()
export class HomeViewModel {

  @observable
  title = 'Hi';

  constructor() {
    makeObservable( this );
  }

  setTitle = (title: string) => this.title = title;

}