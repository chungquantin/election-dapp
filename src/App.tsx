import React from "react";
import Web3 from "web3";
import { HelloWorldABI } from "./contracts/HelloWorldABI";

const web3 = new Web3(Web3.givenProvider);
const contractAddress = "0x86ac7028ebd08bb11c0bec576fba85bb69a8a3d8"; //Contract Address
const HelloWorldContracts = new web3.eth.Contract(
	HelloWorldABI as any,
	contractAddress
);

console.log(HelloWorldContracts);

declare global {
	interface Window {
		ethereum: any;
	}
}

function App() {
	const [greeting, setGreeting] = React.useState(0);

	const setData = async (e: any) => {
		e.preventDefault();
		const accounts = await window.ethereum.enable();
		const account = accounts[0];
		const gas = await HelloWorldContracts.methods
			.setGreeting(greeting)
			.estimateGas();
		const result = await HelloWorldContracts.methods
			.setGreeting(greeting)
			.send({ from: account, gas });
		console.log(result);
	};

	const getData = async (e: any) => {
		e.preventDefault();
		const result = await HelloWorldContracts.methods.greeting().call();

		console.log(result);
	};
	return (
		<div>
			<form onSubmit={setData}>
				<label>
					Set Data:
					<input
						type="text"
						name="greeting"
						value={greeting}
						onChange={(e: any) => setGreeting(e.target.value)}
					/>
				</label>
				<input type="submit" value="Set Data" />
			</form>
			<br />
			<button onClick={getData} type="button">
				Get Data
			</button>
		</div>
	);
}

export default App;
