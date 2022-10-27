import { ethers } from "./ethers-5.1.esm.min.js";

const setBlockNumber = (block) => {
    const blockCounter = document.getElementById("block");
    blockCounter.innerHTML = block;
    blockCounter.href = `https://etherscan.io/block/${block}`;
}

document.addEventListener("DOMContentLoaded", function() {
    const eth = new ethers.providers.JsonRpcProvider("https://mainnet.infura.io/v3/961f0bb451ce43868ef45e2098008e9f");

    eth.getBlockNumber().then((block) => {
        setBlockNumber(block);
    })

    eth.on("block", setBlockNumber);
});
