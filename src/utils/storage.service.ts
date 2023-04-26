import { IMapEntry, makeObservable, observable } from 'mobx';
import { Service } from 'typedi';

@Service()
export class StorageService {

  @observable
  store = this.storage();

  constructor() {
    makeObservable( this );
  }

  get size() {
    return this.store.size;
  }

  has(key: string): boolean {
    return this.store.has(key)
  }

  set(key: string, val?: string): void {
    if( !val ) return;

    localStorage.setItem(key, JSON.stringify(val));
    this.store.set(key, val);
  }

  remove(key: string): void {
    localStorage.removeItem(key);
    this.store.delete(key);
  }

  clear(): void {
    localStorage.clear();
    this.store.clear();
  }

  keys(): IterableIterator<any> {
    return this.store.keys();
  }

  values(): IterableIterator<any> {
    return this.store.values();
  }

  entries(): IterableIterator<IMapEntry<any, any>> {
    return this.store.entries();
  }

  private storage() {
    const state: any = {}
    if (global.localStorage) {
      for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i)

        if( localStorage && key ) {
          const item = localStorage.getItem(key);

          if( item ) state[key] = this.parseValue(item);
        }
      }
    }
    return observable.map(state)
  }
  
  private parseValue( value: string ): any {
    try { return JSON.parse(value) }
    catch(e) { return value }
  }

}