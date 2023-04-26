import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { ethers } from "ethers";
import { Button } from "@material-ui/core";
import { storeData } from "../../utils/store-data";

export function Form() {
  const { register, handleSubmit, setValue } = useForm();

  //Handleing the wallet connection
  useEffect(() => {
    const handleWalletConnect = async () => {
      const { ethereum } = window;
      console.log("Handle Wallet Connect");
      if (ethereum) {
        const provider = new ethers.providers.Web3Provider(ethereum);
        await provider.send("eth_requestAccounts", []);
        const signer = provider.getSigner();
        const address = await signer.getAddress();
        setValue("walletAddress", address);
      } else {
        setValue("walletAddress", "");
      }
    };
    handleWalletConnect();
  }, []);

  return (
    <form onSubmit={handleSubmit((data) => storeData(data))}>
      <h1>Sign up as a teacher</h1>
      <div>
        Enter your username:
        <input type="text" {...register("username")} />
      </div>
      <div>
        Enter your wallet address:
        <input type="text" {...register("walletAddress")} />
      </div>
      <div className="form-group">
        <label htmlFor="picture">Upload picture</label>
        <input
          type="file"
          className="form-control-file"
          id="picture"
          {...register("picture")}
        ></input>
      </div>
      <Button variant="contained" color="primary" type="submit">
        Submit
      </Button>
    </form>
  );
}
