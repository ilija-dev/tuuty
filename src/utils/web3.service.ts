import { ethers } from 'ethers';
import { makeObservable, observable } from 'mobx';
import Container, { Service } from 'typedi';
import { StorageService } from './storage.service';

@Service()
export class Web3Service {

  storageService: StorageService = Container.get(StorageService);

  @observable
  address?: string;

  @observable
  provider: any;
  
  @observable
  signer: any;

  @observable
  chainId?: string;

  constructor() {
    makeObservable( this );

    this.init();
  }

  init() {
    global.window?.ethereum.on('accountsChanged', (accounts: string[]) => {
      this.address = accounts[0];
      this.storageService.set('address', this.address );
    })
  }

  getProvider() {
    if( !this.provider && global.window )
      this.provider = new ethers.providers.Web3Provider(global.window.ethereum);

    return this.provider;
  }

  getSigner() {
    if( !this.signer )
      this.signer = this.getProvider().getSigner();

    return this.signer;
  }

  async getAddress() {    
    if( !this.getProvider() ) return;

    const address = await this.getProvider().send("eth_requestAccounts");
    this.address = typeof address === 'object' ? address[0] : address;
    this.storageService.set('address', this.address );

    return this.address;
  }

  async getChainId() {
    this.chainId = await global.window?.ethereum.request({ method: "eth_chainId" })
    return this.chainId;
  }

}