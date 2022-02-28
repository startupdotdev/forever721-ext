// import browser from "webextension-polyfill";
import { isOpenSeaUrl } from "$lib/utils/open-sea";
// import { ethers } from 'ethers';
// import Web3Modal from 'web3modal';
// import createMetaMaskProvider from "metamask-extension-provider";

const run = async () => {


  if (isOpenSeaUrl(window.location.href)) {
    // console.log("Initializing  Forever721")
    // const provider = createMetaMaskProvider();
    // console.log(provider);
    // const providerOptions = {
    //   /* See Provider Options Section */
    // };


    // let web3Modal = new Web3Modal({
    //   // network: 'mainnet', // optional
    //   // network: 'rinkeby', // optional
    //   cacheProvider: true, // optional
    //   providerOptions // required
    // });


    // const provider = web3Modal.connectTo("metamask").then(a => {
    //   console.log(a);
    // });
    // const provider = new ethers.providers.Web3Provider(instance);
    // const signer = provider.getSigner();
    // const walletAddress = await signer.getAddress();
    // const walletENSAddress = await provider.lookupAddress(walletAddress);
    // const chainId = window?.ethereum?.chainId;
    // // const network = chainIdToNetwork(chainId);
    // console.log(
    //   {
    //     walletAddress,
    //     walletENSAddress,
    //     provider,
    //     signer
    //   }
    // )
  };


};