require("@nomicfoundation/hardhat-toolbox");
require("hardhat-deploy")
require("hardhat-deploy-ethers")
require("@nomiclabs/hardhat-ethers");


/** @type import('hardhat/config').HardhatUserConfig */
module.exports =  {
  solidity: {
    compilers: [
      {
        version: '0.8.0',
      },
      {
        version: '0.8.1'
      },
      {
        version: '0.8.2'
      }
    ]
  },
  networks:{
      mumbai:{
        url:'https://rpc-mumbai.maticvigil.com/v1/07d755e6e6000cb1e56272d13558f6b2bbf98f57',
        chainId:80001,
        accounts:['0469de6e18b5559ffe1c4948441132e7b99615e9e8d7ee72f3f9393dcccc78f8']
      }
  },
  namedAccounts: {
    deployer: {
      default: 0
    }
  }
};
