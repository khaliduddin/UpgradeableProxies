const { ethers, upgrades } = require("hardhat");

async function main() {

    const Box = await ethers.getContractFactory("BoxV2");

    const box = await upgrades.deployProxy(Box, [42], {
        initializer: "initialize",
    });

    await box.deployed();

    console.log("BoxV2 deployed to:", box.address);
}

main()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error)
        process.exit(1)
    })
;