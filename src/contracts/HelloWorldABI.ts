export const HelloWorldABI = [
	{
		inputs: [],
		name: "greeting",
		outputs: [
			{
				internalType: "string",
				name: "",
				type: "string",
			},
		],
		stateMutability: "view",
		type: "function",
		constant: true,
	},
	{
		inputs: [
			{
				internalType: "string",
				name: "__greeting",
				type: "string",
			},
		],
		name: "setGreeting",
		outputs: [],
		stateMutability: "nonpayable",
		type: "function",
	},
];
