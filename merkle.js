const keccak256 = require('keccak256');
const { MerkleTree } = require('merkletreejs');

const whitelistAddresses = [
    "0x5B38Da6a701c568545dCfcB03FcB875f56beddC4",
    "0xAb8483F64d9C6d1EcF9b849Ae677dD3315835cb2",
    "0x4B20993Bc481177ec7E8f571ceCaE8A9e22C02db"
]

const leafNodes = whitelistAddresses.map(el => keccak256(el));

const merkleTree = new MerkleTree(leafNodes, keccak256, { sortPairs : true})

const rootHash = merkleTree.getHexRoot();

console.log('MERKLE ROOT: ',rootHash); // merkle root 

const claimingAddress = leafNodes[0]

const hexProof = merkleTree.getHexProof(claimingAddress);


console.log('HEX PROOF:',hexProof);
