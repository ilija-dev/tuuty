import { makeObservable, observable } from 'mobx';
import { Service } from 'typedi';

@Service()
export class UpcomingViewModel {

  @observable
  title = 'Upcoming';

  constructor() {
    makeObservable( this );
  }
}