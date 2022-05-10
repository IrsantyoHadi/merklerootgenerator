const keccak256 = require('keccak256');
const { MerkleTree } = require('merkletreejs');

const whitelistAddresses = ['0x44f3e2af32Be676689e26C2eB2F3f19fEa91e1BD', '0x9E3EF64ebf7c4E3146f42B40a21E7D600B5A911b'];

const leafNodes = whitelistAddresses.map((el) => keccak256(el));

const merkleTree = new MerkleTree(leafNodes, keccak256, { sortPairs: true });

const rootHash = merkleTree.getHexRoot();

console.log('MERKLE ROOT: ', rootHash); // merkle root

const claimingAddress =
  leafNodes[whitelistAddresses.findIndex((el) => el === '0x44f3e2af32Be676689e26C2eB2F3f19fEa91e1BD')];

const hexProof = merkleTree.getHexProof(claimingAddress);

console.log('HEX PROOF:', hexProof);
