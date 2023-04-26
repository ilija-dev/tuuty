import { makeObservable, observable } from 'mobx';
import { Service } from 'typedi';

@Service()
export class TutorDetailViewModel {

  @observable
  title = 'TutorDetail';

  constructor() {
    makeObservable( this );
  }
}