const { ethers, upgrades } = require("hardhat");

async function main() {

    const Box = await ethers.getContractFactory("BoxV3");

    const box = await upgrades.upgradeProxy(
        "0x59d1826De98579cC155796D5d31581774D9A4715", 
        Box
        );

    console.log("BoxV2 is upgraded and deployed to address:", box.address);
}

main()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error)
        process.exit(1)
    })
;