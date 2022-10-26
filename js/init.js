import { ethers } from "./ethers-5.1.esm.min.js";

const setBlockNumber = (block) => {
    $("#block").text(block);
    $("#block").attr("href", `https://etherscan.io/block/${block}`)
}

jQuery(document).ready(function($) {
    const eth = new ethers.providers.JsonRpcProvider("https://mainnet.infura.io/v3/961f0bb451ce43868ef45e2098008e9f");

    eth.getBlockNumber().then((block) => {
        setBlockNumber(block);
    })

    eth.on("block", setBlockNumber);
});