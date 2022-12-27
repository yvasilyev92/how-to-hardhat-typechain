/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../common";
import type {
  MySimpleERC721,
  MySimpleERC721Interface,
} from "../../contracts/MySimpleERC721";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "approved",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "ApprovalForAll",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "getApproved",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
    ],
    name: "isApprovedForAll",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "mint",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "mintPrice",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "ownerOf",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "setApprovalForAll",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "supply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "supplyLimit",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "tokenURI",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "withdrawAllFunds",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x6080604052655af3107a40006007556127106009553480156200002157600080fd5b506040518060400160405280600a81526020017f53696d706c654e667473000000000000000000000000000000000000000000008152506040518060400160405280600481526020017f534e46540000000000000000000000000000000000000000000000000000000081525081600090816200009f919062000422565b508060019081620000b1919062000422565b505050620000d4620000c8620000da60201b60201c565b620000e260201b60201c565b62000509565b600033905090565b6000600660009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905081600660006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b600081519050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b600060028204905060018216806200022a57607f821691505b60208210810362000240576200023f620001e2565b5b50919050565b60008190508160005260206000209050919050565b60006020601f8301049050919050565b600082821b905092915050565b600060088302620002aa7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff826200026b565b620002b686836200026b565b95508019841693508086168417925050509392505050565b6000819050919050565b6000819050919050565b600062000303620002fd620002f784620002ce565b620002d8565b620002ce565b9050919050565b6000819050919050565b6200031f83620002e2565b620003376200032e826200030a565b84845462000278565b825550505050565b600090565b6200034e6200033f565b6200035b81848462000314565b505050565b5b8181101562000383576200037760008262000344565b60018101905062000361565b5050565b601f821115620003d2576200039c8162000246565b620003a7846200025b565b81016020851015620003b7578190505b620003cf620003c6856200025b565b83018262000360565b50505b505050565b600082821c905092915050565b6000620003f760001984600802620003d7565b1980831691505092915050565b6000620004128383620003e4565b9150826002028217905092915050565b6200042d82620001a8565b67ffffffffffffffff811115620004495762000448620001b3565b5b62000455825462000211565b6200046282828562000387565b600060209050601f8311600181146200049a576000841562000485578287015190505b62000491858262000404565b86555062000501565b601f198416620004aa8662000246565b60005b82811015620004d457848901518255600182019150602085019450602081019050620004ad565b86831015620004f45784890151620004f0601f891682620003e4565b8355505b6001600288020188555050505b505050505050565b612d7c80620005196000396000f3fe60806040526004361061012a5760003560e01c80636817c76c116100ab578063a0712d681161006f578063a0712d68146103ce578063a22cb465146103ea578063b88d4fde14610413578063c87b56dd1461043c578063e985e9c514610479578063f2fde38b146104b65761012a565b80636817c76c146102f957806370a0823114610324578063715018a6146103615780638da5cb5b1461037857806395d89b41146103a35761012a565b806319d1997a116100f257806319d1997a1461022857806323b872dd1461025357806342842e0e1461027c57806349649fbf146102a55780636352211e146102bc5761012a565b806301ffc9a71461012f578063047fc9aa1461016c57806306fdde0314610197578063081812fc146101c2578063095ea7b3146101ff575b600080fd5b34801561013b57600080fd5b5061015660048036038101906101519190611da7565b6104df565b6040516101639190611def565b60405180910390f35b34801561017857600080fd5b506101816105c1565b60405161018e9190611e23565b60405180910390f35b3480156101a357600080fd5b506101ac6105c7565b6040516101b99190611ece565b60405180910390f35b3480156101ce57600080fd5b506101e960048036038101906101e49190611f1c565b610659565b6040516101f69190611f8a565b60405180910390f35b34801561020b57600080fd5b5061022660048036038101906102219190611fd1565b61069f565b005b34801561023457600080fd5b5061023d6107b6565b60405161024a9190611e23565b60405180910390f35b34801561025f57600080fd5b5061027a60048036038101906102759190612011565b6107bc565b005b34801561028857600080fd5b506102a3600480360381019061029e9190612011565b61081c565b005b3480156102b157600080fd5b506102ba61083c565b005b3480156102c857600080fd5b506102e360048036038101906102de9190611f1c565b6108fa565b6040516102f09190611f8a565b60405180910390f35b34801561030557600080fd5b5061030e610980565b60405161031b9190611e23565b60405180910390f35b34801561033057600080fd5b5061034b60048036038101906103469190612064565b610986565b6040516103589190611e23565b60405180910390f35b34801561036d57600080fd5b50610376610a3d565b005b34801561038457600080fd5b5061038d610a51565b60405161039a9190611f8a565b60405180910390f35b3480156103af57600080fd5b506103b8610a7b565b6040516103c59190611ece565b60405180910390f35b6103e860048036038101906103e39190611f1c565b610b0d565b005b3480156103f657600080fd5b50610411600480360381019061040c91906120bd565b610b8b565b005b34801561041f57600080fd5b5061043a60048036038101906104359190612232565b610ba1565b005b34801561044857600080fd5b50610463600480360381019061045e9190611f1c565b610c03565b6040516104709190611ece565b60405180910390f35b34801561048557600080fd5b506104a0600480360381019061049b91906122b5565b610c6b565b6040516104ad9190611def565b60405180910390f35b3480156104c257600080fd5b506104dd60048036038101906104d89190612064565b610cff565b005b60007f80ac58cd000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff191614806105aa57507f5b5e139f000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916145b806105ba57506105b982610d82565b5b9050919050565b60085481565b6060600080546105d690612324565b80601f016020809104026020016040519081016040528092919081815260200182805461060290612324565b801561064f5780601f106106245761010080835404028352916020019161064f565b820191906000526020600020905b81548152906001019060200180831161063257829003601f168201915b5050505050905090565b600061066482610dec565b6004600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b60006106aa826108fa565b90508073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff160361071a576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610711906123c7565b60405180910390fd5b8073ffffffffffffffffffffffffffffffffffffffff16610739610e37565b73ffffffffffffffffffffffffffffffffffffffff161480610768575061076781610762610e37565b610c6b565b5b6107a7576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161079e90612459565b60405180910390fd5b6107b18383610e3f565b505050565b60095481565b6107cd6107c7610e37565b82610ef8565b61080c576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610803906124eb565b60405180910390fd5b610817838383610f8d565b505050565b61083783838360405180602001604052806000815250610ba1565b505050565b610844611286565b600061084e610a51565b73ffffffffffffffffffffffffffffffffffffffff16476040516108719061253c565b60006040518083038185875af1925050503d80600081146108ae576040519150601f19603f3d011682016040523d82523d6000602084013e6108b3565b606091505b50509050806108f7576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016108ee9061259d565b60405180910390fd5b50565b60008061090683611304565b9050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1603610977576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161096e90612609565b60405180910390fd5b80915050919050565b60075481565b60008073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16036109f6576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016109ed9061269b565b60405180910390fd5b600360008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b610a45611286565b610a4f6000611341565b565b6000600660009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b606060018054610a8a90612324565b80601f0160208091040260200160405190810160405280929190818152602001828054610ab690612324565b8015610b035780601f10610ad857610100808354040283529160200191610b03565b820191906000526020600020905b815481529060010190602001808311610ae657829003601f168201915b5050505050905090565b60075481610b1b91906126ea565b341015610b2757600080fd5b60095481600854610b38919061272c565b1115610b4357600080fd5b60005b81811015610b8757600160086000828254610b61919061272c565b92505081905550610b7433600854611407565b8080610b7f90612760565b915050610b46565b5050565b610b9d610b96610e37565b8383611624565b5050565b610bb2610bac610e37565b83610ef8565b610bf1576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610be8906124eb565b60405180910390fd5b610bfd84848484611790565b50505050565b6060610c0e82610dec565b6000610c186117ec565b90506000815111610c385760405180602001604052806000815250610c63565b80610c4284611803565b604051602001610c539291906127e4565b6040516020818303038152906040525b915050919050565b6000600560008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b610d07611286565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1603610d76576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610d6d9061287a565b60405180910390fd5b610d7f81611341565b50565b60007f01ffc9a7000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916149050919050565b610df5816118d1565b610e34576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610e2b90612609565b60405180910390fd5b50565b600033905090565b816004600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff16610eb2836108fa565b73ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45050565b600080610f04836108fa565b90508073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff161480610f465750610f458185610c6b565b5b80610f8457508373ffffffffffffffffffffffffffffffffffffffff16610f6c84610659565b73ffffffffffffffffffffffffffffffffffffffff16145b91505092915050565b8273ffffffffffffffffffffffffffffffffffffffff16610fad826108fa565b73ffffffffffffffffffffffffffffffffffffffff1614611003576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610ffa9061290c565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603611072576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016110699061299e565b60405180910390fd5b61107f8383836001611912565b8273ffffffffffffffffffffffffffffffffffffffff1661109f826108fa565b73ffffffffffffffffffffffffffffffffffffffff16146110f5576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016110ec9061290c565b60405180910390fd5b6004600082815260200190815260200160002060006101000a81549073ffffffffffffffffffffffffffffffffffffffff02191690556001600360008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825403925050819055506001600360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282540192505081905550816002600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a46112818383836001611a38565b505050565b61128e610e37565b73ffffffffffffffffffffffffffffffffffffffff166112ac610a51565b73ffffffffffffffffffffffffffffffffffffffff1614611302576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016112f990612a0a565b60405180910390fd5b565b60006002600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b6000600660009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905081600660006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603611476576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161146d90612a76565b60405180910390fd5b61147f816118d1565b156114bf576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016114b690612ae2565b60405180910390fd5b6114cd600083836001611912565b6114d6816118d1565b15611516576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161150d90612ae2565b60405180910390fd5b6001600360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282540192505081905550816002600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a4611620600083836001611a38565b5050565b8173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1603611692576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161168990612b4e565b60405180910390fd5b80600560008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31836040516117839190611def565b60405180910390a3505050565b61179b848484610f8d565b6117a784848484611a3e565b6117e6576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016117dd90612be0565b60405180910390fd5b50505050565b606060405180602001604052806000815250905090565b60606000600161181284611bc5565b01905060008167ffffffffffffffff81111561183157611830612107565b5b6040519080825280601f01601f1916602001820160405280156118635781602001600182028036833780820191505090505b509050600082602001820190505b6001156118c6578080600190039150507f3031323334353637383961626364656600000000000000000000000000000000600a86061a8153600a85816118ba576118b9612c00565b5b04945060008503611871575b819350505050919050565b60008073ffffffffffffffffffffffffffffffffffffffff166118f383611304565b73ffffffffffffffffffffffffffffffffffffffff1614159050919050565b6001811115611a3257600073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff16146119a65780600360008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825461199e9190612c2f565b925050819055505b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614611a315780600360008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254611a29919061272c565b925050819055505b5b50505050565b50505050565b6000611a5f8473ffffffffffffffffffffffffffffffffffffffff16611d18565b15611bb8578373ffffffffffffffffffffffffffffffffffffffff1663150b7a02611a88610e37565b8786866040518563ffffffff1660e01b8152600401611aaa9493929190612cb8565b6020604051808303816000875af1925050508015611ae657506040513d601f19601f82011682018060405250810190611ae39190612d19565b60015b611b68573d8060008114611b16576040519150601f19603f3d011682016040523d82523d6000602084013e611b1b565b606091505b506000815103611b60576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611b5790612be0565b60405180910390fd5b805181602001fd5b63150b7a0260e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916817bffffffffffffffffffffffffffffffffffffffffffffffffffffffff191614915050611bbd565b600190505b949350505050565b600080600090507a184f03e93ff9f4daa797ed6e38ed64bf6a1f0100000000000000008310611c23577a184f03e93ff9f4daa797ed6e38ed64bf6a1f0100000000000000008381611c1957611c18612c00565b5b0492506040810190505b6d04ee2d6d415b85acef81000000008310611c60576d04ee2d6d415b85acef81000000008381611c5657611c55612c00565b5b0492506020810190505b662386f26fc100008310611c8f57662386f26fc100008381611c8557611c84612c00565b5b0492506010810190505b6305f5e1008310611cb8576305f5e1008381611cae57611cad612c00565b5b0492506008810190505b6127108310611cdd576127108381611cd357611cd2612c00565b5b0492506004810190505b60648310611d005760648381611cf657611cf5612c00565b5b0492506002810190505b600a8310611d0f576001810190505b80915050919050565b6000808273ffffffffffffffffffffffffffffffffffffffff163b119050919050565b6000604051905090565b600080fd5b600080fd5b60007fffffffff0000000000000000000000000000000000000000000000000000000082169050919050565b611d8481611d4f565b8114611d8f57600080fd5b50565b600081359050611da181611d7b565b92915050565b600060208284031215611dbd57611dbc611d45565b5b6000611dcb84828501611d92565b91505092915050565b60008115159050919050565b611de981611dd4565b82525050565b6000602082019050611e046000830184611de0565b92915050565b6000819050919050565b611e1d81611e0a565b82525050565b6000602082019050611e386000830184611e14565b92915050565b600081519050919050565b600082825260208201905092915050565b60005b83811015611e78578082015181840152602081019050611e5d565b60008484015250505050565b6000601f19601f8301169050919050565b6000611ea082611e3e565b611eaa8185611e49565b9350611eba818560208601611e5a565b611ec381611e84565b840191505092915050565b60006020820190508181036000830152611ee88184611e95565b905092915050565b611ef981611e0a565b8114611f0457600080fd5b50565b600081359050611f1681611ef0565b92915050565b600060208284031215611f3257611f31611d45565b5b6000611f4084828501611f07565b91505092915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000611f7482611f49565b9050919050565b611f8481611f69565b82525050565b6000602082019050611f9f6000830184611f7b565b92915050565b611fae81611f69565b8114611fb957600080fd5b50565b600081359050611fcb81611fa5565b92915050565b60008060408385031215611fe857611fe7611d45565b5b6000611ff685828601611fbc565b925050602061200785828601611f07565b9150509250929050565b60008060006060848603121561202a57612029611d45565b5b600061203886828701611fbc565b935050602061204986828701611fbc565b925050604061205a86828701611f07565b9150509250925092565b60006020828403121561207a57612079611d45565b5b600061208884828501611fbc565b91505092915050565b61209a81611dd4565b81146120a557600080fd5b50565b6000813590506120b781612091565b92915050565b600080604083850312156120d4576120d3611d45565b5b60006120e285828601611fbc565b92505060206120f3858286016120a8565b9150509250929050565b600080fd5b600080fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b61213f82611e84565b810181811067ffffffffffffffff8211171561215e5761215d612107565b5b80604052505050565b6000612171611d3b565b905061217d8282612136565b919050565b600067ffffffffffffffff82111561219d5761219c612107565b5b6121a682611e84565b9050602081019050919050565b82818337600083830152505050565b60006121d56121d084612182565b612167565b9050828152602081018484840111156121f1576121f0612102565b5b6121fc8482856121b3565b509392505050565b600082601f830112612219576122186120fd565b5b81356122298482602086016121c2565b91505092915050565b6000806000806080858703121561224c5761224b611d45565b5b600061225a87828801611fbc565b945050602061226b87828801611fbc565b935050604061227c87828801611f07565b925050606085013567ffffffffffffffff81111561229d5761229c611d4a565b5b6122a987828801612204565b91505092959194509250565b600080604083850312156122cc576122cb611d45565b5b60006122da85828601611fbc565b92505060206122eb85828601611fbc565b9150509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b6000600282049050600182168061233c57607f821691505b60208210810361234f5761234e6122f5565b5b50919050565b7f4552433732313a20617070726f76616c20746f2063757272656e74206f776e6560008201527f7200000000000000000000000000000000000000000000000000000000000000602082015250565b60006123b1602183611e49565b91506123bc82612355565b604082019050919050565b600060208201905081810360008301526123e0816123a4565b9050919050565b7f4552433732313a20617070726f76652063616c6c6572206973206e6f7420746f60008201527f6b656e206f776e6572206f7220617070726f76656420666f7220616c6c000000602082015250565b6000612443603d83611e49565b915061244e826123e7565b604082019050919050565b6000602082019050818103600083015261247281612436565b9050919050565b7f4552433732313a2063616c6c6572206973206e6f7420746f6b656e206f776e6560008201527f72206f7220617070726f76656400000000000000000000000000000000000000602082015250565b60006124d5602d83611e49565b91506124e082612479565b604082019050919050565b60006020820190508181036000830152612504816124c8565b9050919050565b600081905092915050565b50565b600061252660008361250b565b915061253182612516565b600082019050919050565b600061254782612519565b9150819050919050565b7f4661696c65642077697468647261770000000000000000000000000000000000600082015250565b6000612587600f83611e49565b915061259282612551565b602082019050919050565b600060208201905081810360008301526125b68161257a565b9050919050565b7f4552433732313a20696e76616c696420746f6b656e2049440000000000000000600082015250565b60006125f3601883611e49565b91506125fe826125bd565b602082019050919050565b60006020820190508181036000830152612622816125e6565b9050919050565b7f4552433732313a2061646472657373207a65726f206973206e6f74206120766160008201527f6c6964206f776e65720000000000000000000000000000000000000000000000602082015250565b6000612685602983611e49565b915061269082612629565b604082019050919050565b600060208201905081810360008301526126b481612678565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60006126f582611e0a565b915061270083611e0a565b925082820261270e81611e0a565b91508282048414831517612725576127246126bb565b5b5092915050565b600061273782611e0a565b915061274283611e0a565b925082820190508082111561275a576127596126bb565b5b92915050565b600061276b82611e0a565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff820361279d5761279c6126bb565b5b600182019050919050565b600081905092915050565b60006127be82611e3e565b6127c881856127a8565b93506127d8818560208601611e5a565b80840191505092915050565b60006127f082856127b3565b91506127fc82846127b3565b91508190509392505050565b7f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160008201527f6464726573730000000000000000000000000000000000000000000000000000602082015250565b6000612864602683611e49565b915061286f82612808565b604082019050919050565b6000602082019050818103600083015261289381612857565b9050919050565b7f4552433732313a207472616e736665722066726f6d20696e636f72726563742060008201527f6f776e6572000000000000000000000000000000000000000000000000000000602082015250565b60006128f6602583611e49565b91506129018261289a565b604082019050919050565b60006020820190508181036000830152612925816128e9565b9050919050565b7f4552433732313a207472616e7366657220746f20746865207a65726f2061646460008201527f7265737300000000000000000000000000000000000000000000000000000000602082015250565b6000612988602483611e49565b91506129938261292c565b604082019050919050565b600060208201905081810360008301526129b78161297b565b9050919050565b7f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572600082015250565b60006129f4602083611e49565b91506129ff826129be565b602082019050919050565b60006020820190508181036000830152612a23816129e7565b9050919050565b7f4552433732313a206d696e7420746f20746865207a65726f2061646472657373600082015250565b6000612a60602083611e49565b9150612a6b82612a2a565b602082019050919050565b60006020820190508181036000830152612a8f81612a53565b9050919050565b7f4552433732313a20746f6b656e20616c7265616479206d696e74656400000000600082015250565b6000612acc601c83611e49565b9150612ad782612a96565b602082019050919050565b60006020820190508181036000830152612afb81612abf565b9050919050565b7f4552433732313a20617070726f766520746f2063616c6c657200000000000000600082015250565b6000612b38601983611e49565b9150612b4382612b02565b602082019050919050565b60006020820190508181036000830152612b6781612b2b565b9050919050565b7f4552433732313a207472616e7366657220746f206e6f6e20455243373231526560008201527f63656976657220696d706c656d656e7465720000000000000000000000000000602082015250565b6000612bca603283611e49565b9150612bd582612b6e565b604082019050919050565b60006020820190508181036000830152612bf981612bbd565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b6000612c3a82611e0a565b9150612c4583611e0a565b9250828203905081811115612c5d57612c5c6126bb565b5b92915050565b600081519050919050565b600082825260208201905092915050565b6000612c8a82612c63565b612c948185612c6e565b9350612ca4818560208601611e5a565b612cad81611e84565b840191505092915050565b6000608082019050612ccd6000830187611f7b565b612cda6020830186611f7b565b612ce76040830185611e14565b8181036060830152612cf98184612c7f565b905095945050505050565b600081519050612d1381611d7b565b92915050565b600060208284031215612d2f57612d2e611d45565b5b6000612d3d84828501612d04565b9150509291505056fea26469706673582212204e5afd4260f9a406f62b1a20329a8f18f78fd46b0678731807df44ce020eed4e64736f6c63430008110033";

type MySimpleERC721ConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: MySimpleERC721ConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class MySimpleERC721__factory extends ContractFactory {
  constructor(...args: MySimpleERC721ConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<MySimpleERC721> {
    return super.deploy(overrides || {}) as Promise<MySimpleERC721>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): MySimpleERC721 {
    return super.attach(address) as MySimpleERC721;
  }
  override connect(signer: Signer): MySimpleERC721__factory {
    return super.connect(signer) as MySimpleERC721__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): MySimpleERC721Interface {
    return new utils.Interface(_abi) as MySimpleERC721Interface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): MySimpleERC721 {
    return new Contract(address, _abi, signerOrProvider) as MySimpleERC721;
  }
}
