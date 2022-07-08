require("@nomicfoundation/hardhat-waffle");
require("dotenv").config({ path: ".env" });

const INFURA_API_KEY_URL = process.env.INFURA_API_KEY_URL;
const ROPSTEN_PRIVATE_KEY = process.env.ROPSTEN_PRIVATE_KEY;

module.exports = {
  solidity: "0.8.4",
  networks: {
    ropsten: {
      url: INFURA_API_KEY_URL,
      accounts: [ROPSTEN_PRIVATE_KEY]
    }
  }
};
