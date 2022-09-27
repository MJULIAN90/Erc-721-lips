const path = require("path");
require("dotenv").config();

const proyectId = process.env.INFURA_PROYECT_ID;
const mnemonic = process.env.MNEMONIC;

const HDWalletProvider = require("@truffle/hdwallet-provider");

module.exports = {
  contracts_build_directory: path.join(__dirname, "src/contracts"),

  networks: {
    develop: {
      host: "127.0.0.1", // Localhost (default: none)
      port: 8545, // Standard Ethereum port (default: none)
      network_id: "*", // Any network (default: none)
    },

    ropsten: {
      provider: () =>
        new HDWalletProvider({
          mnemonic: {
            phrase: mnemonic,
          },
          providerOrUrl: `https://ropsten.infura.io/v3/${proyectId}`,
          numberOfAddresses: 1,
          shareNonce: true,
        }),
      network_id: "3",
    },
  },

  // Configure your compilers
  compilers: {
    solc: {
      version: "0.8.1", // Fetch exact version from solc-bin (default: truffle's version)
      docker: false, // Use "0.5.1" you've installed locally with docker (default: false)
      settings: {
        // See the solidity docs for advice about optimization and evmVersion
        optimizer: {
          enabled: true,
          runs: 200,
        },
        evmVersion: "byzantium",
      },
    },
  },
};
