# How to use Hardhats Typechain plugin to generate Typescript Contract Bindings

##### This is a small tutorial I made showing step by step how to use Hardhats Typechain plugin to generate Typescript Contract Bindings and apply it to a simple deploy script, with a basic ERC721 contract as the example contract.


### To run the deploy script:
```
make deploy
```

### First npm install all the dependencies you will need
```
npm i --save-dev @nomicfoundation/hardhat-toolbox 
    @openzeppelin/contracts
    @typechain/ethers-v5
    @typechain/hardhat
    @types/node
    ethers
    hardhat
    ts-node
    typechain
    typescript
```

### Then create your contracts directory & place your contracts solidity code inside
```
mkdir contracts
```

### Next initialize your project as a hardhat project
```
npx hardhat init
```
Choose the option "Create an empty hardhat.config.js"

### Next rename your hardhat config file to a typescript file
```
mv hardhat.config.js hardhat.config.ts
```

### Next replace all the contents inside hardhat.config.ts with hardhat configuration for typescript found in the Hardhat Docs: https://hardhat.org/hardhat-runner/docs/guides/typescript

### Next use hardhat to compile your Typescript Bindings
```
npx hardhat compile
```

##### Next update your tsconfig.json file so that moduleResolution : "node" and that you include the "typechain-types" dir and the file "hardhat.config.ts" -- see project tsconfig.json file for example.

### Thats it! You can now declare Ethersjs Providers & Wallets and interact with your contracts by importing their factory types, see src/deploy.ts for example.