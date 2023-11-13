import { useState } from 'react'; 
import { ethers } from "ethers";
import './App.css';

import greetABI from './contractJSON/backend.json';
const conAdd = "0x5FbDB2315678afecb367f032d93F642f64180aa3";

function App() {
  //Property Variables
      const [greet, setGreeting] = useState('');
  //

  // Requests access to the user's Meta Mask Account
  // https://metamask.io/
  async function requestAccount() {
    await window.ethereum.request({ method: "eth_requestAccounts" });
  }

  // Fetches the current value store in greeting
  async function fetchGreeting() {
    await requestAccount();

    // If MetaMask exists
    if (typeof window.ethereum !== "undefined") {
      const provider = new ethers.BrowserProvider(window.ethereum);
      const contract = new ethers.Contract(conAdd,greetABI.abi,provider);

      try {
        // Call Greeter.greet() and display current greeting in `console`
        /* 
          function greet() public view returns (string memory) {
            return greeting;
          }
        */
        const data = await contract.getHello();
        console.log("data: ", data);
        setGreeting(data);
      } catch (error) {
        console.log("Error: ", error);
      }
    }
  }
  return (<div align= 'center'>
    <div>
      <h2>Hello User</h2>
    </div>
    <button onClick={fetchGreeting}>Say hello</button>
    <input
          onChange={(e) => setGreeting(e.target.value)}
          value={greet}
          placeholder="placeholder"
    />
  </div>);
}

export default App;
