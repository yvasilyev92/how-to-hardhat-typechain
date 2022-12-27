import {ethers} from 'hardhat';
import {MySimpleERC721__factory} from '../typechain-types/factories/contracts/MySimpleERC721__factory'

// Create a basic wallet connected to an RPC url
const RPC_URL = String(process.env.RPC_URL);
const provider = new ethers.providers.JsonRpcProvider(RPC_URL);
const PRIVATE_KEY = String(process.env.PRIVATE_KEY);
const wallet = new ethers.Wallet(PRIVATE_KEY, provider);

async function main() {

    const contract = await new MySimpleERC721__factory(wallet).deploy();
    await contract.deployed()

    const contractAddress = contract.address;
    console.log(`Contract address: ${contractAddress}`);
}

main().catch((error) => {
    console.log(error);
    process.exitCode = 1;
})