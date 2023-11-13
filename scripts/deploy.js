const hre = require("hardhat");

async function main() {
  const Back = await hre.ethers.getContractFactory('backend');
  const back = await Back.deploy();
  await back.waitForDeployment();

  console.log(`Contract deployed to ${back.target}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
