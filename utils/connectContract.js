import abiJSON from "./WEB3RSVP.json";
import { ethers } from "ethers";

function connectContract() {
	const contractAddress = "0x344DDddc3E8560b5697Ce4168b53869EFE520980";
	const contractABI = abiJSON.abi;
	let rsvpContract;
	try {
		const { ethereum } = window;

		if (ethereum) {
			const provider = new ethers.providers.Web3Provider(ethereum);
			const signer = provider.getSigner();
			rsvpContract = new ethers.Contract(contractAddress, contractABI, signer)
		} else {
			console.log("Ethereum object doesn't exist!");
		}
	} catch (error) {
		console.log("ERROR:", error);
	}
	return rsvpContract;
}

export default connectContract;