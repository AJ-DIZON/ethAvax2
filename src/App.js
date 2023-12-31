import { useState } from 'react'; 
import { ethers } from "ethers";
import './App.css';

import greetABI from './contractJSON/backend.json';
const conAdd = "0x5FbDB2315678afecb367f032d93F642f64180aa3";

function App() {
  //Property Variables
      const [greet, setGreeting] = useState('');
      const [say, setSay] = useState('');
      const [placeholder, setPlace] = useState('');
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
        const data = await contract.getHello();
        console.log("data: ", data);
        setGreeting(data);
      } catch (error) {
        console.log("Error: ", error);
      }
    }
  }

  async function placeSay(){
    if (!placeholder) return;

    await requestAccount();

    // If MetaMask exists
    if (typeof window.ethereum !== "undefined") {

      try {
      const provider3 = new ethers.BrowserProvider(window.ethereum);
      const signer3 = await provider3.getSigner();

      const contract3 = new ethers.Contract(conAdd,greetABI.abi,signer3);
      const transaction = await contract3.setSay(placeholder);

      await transaction.wait();
      setSay('');
      setPlace('');
    } catch (error) {
      console.log("Error: ", error);
    }
    }
  }
  
  async function fetchSay() {
    await requestAccount();

    // If MetaMask exists
    if (typeof window.ethereum !== "undefined") {
      const provider2 = new ethers.BrowserProvider(window.ethereum);
      const contract2 = new ethers.Contract(conAdd,greetABI.abi,provider2);

      try {
        const data2 = await contract2.getSay();
        console.log("data: ", data2);
        setSay(data2);
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
          placeholder="placeholder 1"
    />
    <div>
    <button onClick={placeSay} >Place custom greeting</button>
    <input
          onChange={(e) => setPlace(e.target.value)}
          value={placeholder}
          placeholder="place message here"
    />
    <button onClick={fetchSay}>Say nice to meet you</button>
    <input
          onChange={(e) => setSay(e.target.value)}
          value={say}
          placeholder="placeholder 2"
    />
    </div>
  </div>);
}

export default App;
