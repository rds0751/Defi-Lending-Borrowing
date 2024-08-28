import LendingAndBorrowing from '../abis/LendingAndBorrowing.json'


export const loadContract = async (contractName, web3) => {
 const NETWORK_ID = await web3.eth.net.getId();
 const Artifact = LendingAndBorrowing;
 const lendingBorrowing = LendingAndBorrowing.networks[NETWORK_ID]

  let contract = null;

  try {

    contract = new web3.eth.Contract(
     Artifact.abi,
     '0xE4322A14191b812694036BC4C90141D37465BFc9'
    );

  }
  catch (err) {
   console.log("This is the error")
    console.error(err);
  }

  return contract;
};
