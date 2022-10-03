import { useEffect, useMemo, useState } from "react";
import useEthers from "./useEthers";
import useAlerts from "./useAlerts";

const useInitial = () => {
  const {
    messageBalance,
    createNtfAlert,
    messageAlert,
    messageAlertError,
  } = useAlerts();
  const [listNtfs, setListNtfs] = useState([]);
  const [isOwner, setIsOwner] = useState(false);
  const [feeAmount, setFeeAmount] = useState(null);
  const [balanceWallet, setBalanceWallet] = useState(0);

  const { contract, ethers, walletAddress, signer, utils } = useEthers();

  useEffect(() => {
    window.ethereum.on("accountsChanged", () => {
      window.location.reload();
    });
    window.ethereum.on("chainChanged", (_chainId) => window.location.reload());
  }, []);

  useEffect(() => {
    getNTFs();
  }, []);

  const connectToRopsten = async () => {
    await window.ethereum.request({
      method: "wallet_switchEthereumChain",
      params: [{ chainId: `0x${Number(3).toString(16)}` }],
    });
  };

  // Get balance wallet
  const getBalanceWallet = useMemo(async () => {
    try {
      let balance = (await signer.getBalance()).toString();
      let balaceEther = ethers.utils.formatEther(balance);

      setBalanceWallet(balaceEther);
    } catch (error) {
      console.log(error.message);
    }
  }, [walletAddress]);

  // Get fee when we create ntf in the smart contract
  const getFee = useMemo(async () => {
    try {
      const fee = await contract.fee();
      setFeeAmount(ethers.utils.formatEther(fee));
    } catch (error) {
      console.log(error.message);
    }
  }, [walletAddress]);

  // Get onwer smart contract
  const getOwner = useMemo(async () => {
    try {
      const findOwner = await contract.owner();
      if (findOwner.toUpperCase() === walletAddress.toUpperCase())
        setIsOwner(true);
    } catch (error) {
      console.log(error.message);
    }
  }, [walletAddress, isOwner]);

  // Get list
  const getNTFs = async () => {
    try {
      const list = await contract.getLips();
      let array = [];
      list.map((ntf) => {
        const { level, name, rarity, id, dna } = ntf;
        return array.push({
          level,
          name,
          rarity,
          id: id.toString(),
          dna: dna.toString(),
          ownerNtf: ntf.owner,
        });
      });
      setListNtfs(array);
    } catch (error) {
      console.log(error.message);
    }
  };

  // Mint new Token NFT
  const getCreateNTF = async (_name) => {
    try {
      const createTocken = await contract
        .connect(signer)
        .createRandomLip(_name, {
          value: utils.parseEther(feeAmount),
          gasLimit: 500000,
        });

      messageAlert("This transaction may take a few moments");
      const response = await createTocken.wait();
      if (response.confirmations === 1) {
        messageAlert("Ntf Created successful");
        getNTFs();
      } else {
        throw new Error("Error creating your ntfs");
      }
    } catch (error) {
      messageAlertError("Error in red");
      window.location.reload();
      console.log(error.message);
      return null;
    }
  };

  // Get level to your ntfs
  const getUpLvl = async (_id) => {
    try {
      const lvlUp = await contract.levelUp(_id);
      messageAlert("This may take a few minutes");

      const response = await lvlUp.wait();

      if (response.confirmations === 1) {
        messageAlert("Level up successful");
        getNTFs();
      } else {
        throw new Error("Error Level up in ntf");
      }
    } catch (error) {
      console.log(error);
    }
  };

  // check Smart Contract balance
  const balanceContract = async () => {
    try {
      const response = await contract.moneySmartContract();
      const balanc = ethers.utils.formatEther(response.toString());

      messageBalance(balanc);
    } catch (error) {
      console.log(error.message);
    }
  };

  // Balance withdrawal only owner
  const withdrawalOwner = async () => {
    try {
      await contract.connect(signer).withdraw();
      messageAlert("Your withdrawal is in process");
    } catch (error) {
      console.log(error.message);
    }
  };

  return {
    getCreateNTF,
    getUpLvl,
    balanceContract,
    createNtfAlert,
    withdrawalOwner,
    messageAlertError,
    connectToRopsten,
    balanceWallet,
    getFee,
    getOwner,
    walletAddress,
    listNtfs,
    isOwner,
    getBalanceWallet,
    feeAmount,
  };
};

export default useInitial;
