import { ethers, utils } from "ethers";
import { useEffect, useState } from "react";
import contractData from "../contracts/LipToken.json";
import { contractNumberLocal, contractNumberRospten } from "../utils";
import useAlerts from "./useAlerts";

// const contractNumber = contractNumberLocal;
const contractNumber = contractNumberRospten;

const useEthers = () => {
  const [walletAddress, setWalletAddress] = useState("");
  const { messageAlert } = useAlerts();

  useEffect(() => {
    (async () => {
      console.log("Requesting account...");

      if (!window.ethereum) {
        messageAlert("You need a provider like MetaMask!");
        return;
      } else if (window.ethereum) {
        try {
          await window.ethereum.enable();
          const accounts = await window.ethereum.request({
            method: "eth_requestAccounts",
          });

          setWalletAddress(accounts[0]);
        } catch (error) {
          console.log("Error connecting...");
        }
      } else {
        messageAlert("Meta Mask not detected");
      }
    })();
  }, []);

  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const signer = provider.getSigner();
  const contract = new ethers.Contract(
    contractNumber,
    contractData.abi,
    signer
  );

  return {
    contract,
    ethers,
    walletAddress,
    signer,
    utils,
  };
};

export default useEthers;
