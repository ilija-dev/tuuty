import { FieldValues } from "react-hook-form";
import { Web3Storage } from "web3.storage";

function getAccessToken() {
  return process.env.WEB3STORAGE_TOKEN;
}

function makeStorageClient() {
  return new Web3Storage({ token: getAccessToken()! });
}

export async function storeData(data: FieldValues) {
  const client = makeStorageClient();

  const files = makeFileObjects(data);
  const cid = await client.put(files);
  console.log("Stored files with cid: " + cid);
}

function makeFileObjects(data: any) {
  const blob = new Blob([JSON.stringify(data)], { type: "application/json" });
  const files = [
    new File([data.username], "plain-utf8.txt"),
    new File([blob], data.username + ".json"),
  ];
  console.log(process.env.WEB3STORAGE_TOKEN);

  return files;
}
