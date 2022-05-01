//https://betterprogramming.pub/build-your-first-dapp-with-web3-js-9a7306d16a61

//const Web3 = require('web3');
//// web3 lib instance
//const web3 = new Web3(window.ethereum);
//// get all accounts
//const accounts = await web3.eth.getAccounts();
//0x35714de68f22031454c7AE7393fb88397C8fadF5


//const ethEnabled = () => {  
//  if (window.web3) {    
//    window.web3 = new Web3(window.web3.currentProvider);   
//    window.ethereum.enable();    
 //   return true;  
 // }  
 // return false;}



//  if (!ethEnabled()) {
//      alert("Please install MetaMask to use this dApp!");//
//    }
 // else {
 //   alert("MM Connected");
 // }
const contractAddress = "0x35714de68f22031454c7AE7393fb88397C8fadF5"
const myABI =[
	{
		"inputs": [],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "previousOwner",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "newOwner",
				"type": "address"
			}
		],
		"name": "OwnershipTransferred",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_name",
				"type": "string"
			}
		],
		"name": "addOption",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "clearOptions",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "closeVoting",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_question",
				"type": "string"
			}
		],
		"name": "createProposal",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getOptions",
		"outputs": [
			{
				"components": [
					{
						"internalType": "string",
						"name": "name",
						"type": "string"
					},
					{
						"internalType": "uint256",
						"name": "voteCount",
						"type": "uint256"
					}
				],
				"internalType": "struct Ballot.Option[]",
				"name": "options_",
				"type": "tuple[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_index",
				"type": "uint256"
			}
		],
		"name": "getProposals",
		"outputs": [
			{
				"components": [
					{
						"internalType": "string",
						"name": "question",
						"type": "string"
					},
					{
						"internalType": "uint256",
						"name": "voting_opened_block",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "voting_closed_block",
						"type": "uint256"
					},
					{
						"components": [
							{
								"internalType": "string",
								"name": "name",
								"type": "string"
							},
							{
								"internalType": "uint256",
								"name": "voteCount",
								"type": "uint256"
							}
						],
						"internalType": "struct Ballot.Option[]",
						"name": "options",
						"type": "tuple[]"
					},
					{
						"internalType": "string",
						"name": "winningOption",
						"type": "string"
					},
					{
						"internalType": "bool",
						"name": "active",
						"type": "bool"
					}
				],
				"internalType": "struct Ballot.Proposal",
				"name": "proposal",
				"type": "tuple"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getProposals",
		"outputs": [
			{
				"components": [
					{
						"internalType": "string",
						"name": "question",
						"type": "string"
					},
					{
						"internalType": "uint256",
						"name": "voting_opened_block",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "voting_closed_block",
						"type": "uint256"
					},
					{
						"components": [
							{
								"internalType": "string",
								"name": "name",
								"type": "string"
							},
							{
								"internalType": "uint256",
								"name": "voteCount",
								"type": "uint256"
							}
						],
						"internalType": "struct Ballot.Option[]",
						"name": "options",
						"type": "tuple[]"
					},
					{
						"internalType": "string",
						"name": "winningOption",
						"type": "string"
					},
					{
						"internalType": "bool",
						"name": "active",
						"type": "bool"
					}
				],
				"internalType": "struct Ballot.Proposal[]",
				"name": "proposals_",
				"type": "tuple[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getVoteOpenStatus",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "voter",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "weight",
				"type": "uint256"
			}
		],
		"name": "giveRightToVote",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "openVoting",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "owner",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "renounceOwnership",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "newOwner",
				"type": "address"
			}
		],
		"name": "transferOwnership",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_question",
				"type": "string"
			}
		],
		"name": "updateProposalQuestion",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "option",
				"type": "uint256"
			}
		],
		"name": "vote",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "voters",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "weight",
				"type": "uint256"
			},
			{
				"internalType": "bool",
				"name": "voted",
				"type": "bool"
			},
			{
				"internalType": "uint256",
				"name": "vote",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "winnerName",
		"outputs": [
			{
				"internalType": "string",
				"name": "winnerName_",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
]
 async function EnableSGB() {
  const web3 = new Web3(window.ethereum);

    const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
    const account = accounts[0];
    alert(account);
    showAccount.innerHTML = account;
  }
  
 


  function getValue() {
    console.log(testingvalue);
  }

  async function getNetID(w3) {
   
    const netId = await w3.eth.net.getId();
      console.log(netId);
      console.log("END");
    return netId;
  }

  async function submit() {

    const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
    const account = accounts[0];
    console.log("ACCOUNT");
    console.log(account);
    const web3 = new Web3(window.ethereum);
    netID = await getNetID(web3);
    const contract = new web3.eth.Contract(myABI, contractAddress);
    var element = document.getElementById("options");
    var result = element.value;
    console.log("REULST", result)


    contract.methods
   .vote(result)
   .send({
    from: account,
    gas: 233000
  });


    contract.methods.getOptions().call(function (err, res) {

      if (err) {
    
        console.log("An error occured", err)
    
        return
    
      }
    
      console.log("The balance is: ", res)
    
    })
//const accounts = await web3.eth.getAccounts();
 
  }

  //const getContract = async (web3) => {
  
  
 //   const netId = await web3.eth.net.getId();
 //   console.log("NET ID");
  //  console.log(netId);
 //   const deployedNetwork = data.networks[netId];
   // const greeting = new web3.eth.Contract(
  //    data.abi,
    //  deployedNetwork && deployedNetwork.address
  //  );
  //  return greeting;
 // };
