import { ethers } from 'ethers';
import { makeObservable, observable, toJS } from 'mobx';
import Container, { Service } from 'typedi';
import { StorageService } from './storage.service';

import { Framework } from "@superfluid-finance/sdk-core";
import { Web3Service } from "./web3.service";

@Service()
export class SuperFluid {


  storageService: StorageService = Container.get(StorageService);
  web3Service: Web3Service = Container.get(Web3Service);

  @observable
  sf: any;

  @observable
  DAIx: any;

  constructor() {
    makeObservable( this );

    this.init();
  }

  async init() {
    const provider = toJS(await this.web3Service.getProvider());
    const address = toJS(await this.web3Service.getAddress());
    const chainId = toJS(await this.web3Service.getChainId());

    this.sf = await Framework.create({
      chainId: Number(chainId),
      provider: provider,
    });
  
    const DAIxContract = await this.sf.loadSuperToken("fDAIx");
    this.DAIx = DAIxContract.address;
  }

  async createNewFlow( recipient: string, flowRate: number ) {
  
    try {
      const createFlowOperation = this.sf.cfaV1.createFlow({
        flowRate: flowRate,
        receiver: recipient,
        superToken: this.DAIx
      });
  
      const result = await createFlowOperation.exec(this.web3Service.getSigner());
      console.log(
        `
          Congrats - you've just created a money stream!
          View Your Stream At: https://app.superfluid.finance/dashboard/${recipient}
          Network: Goerli
          Super Token: DAIx
          Sender: ${this.web3Service.address},
          Receiver: ${recipient},
          FlowRate: ${flowRate}
        `,
        result
      );

      return result;

    } catch (error) { console.error };
  }

  async deleteFlow(recipient:any) {

    try {
      const deleteFlowOperation = this.sf.cfaV1.deleteFlow({
        sender: this.web3Service.address, 
        receiver: recipient,
        superToken: this.DAIx,
      });
  
      const result = await deleteFlowOperation.exec(this.web3Service.getSigner());
  
      console.log(
        `
          Congrats - you've just deleted your money stream!
          Network: Kovan
          Super Token: DAIx
          Sender: ${this.web3Service.address}
          Receiver: ${recipient}
        `,
        result
      );

      return result;

    } catch (error) { console.error }
  }

}