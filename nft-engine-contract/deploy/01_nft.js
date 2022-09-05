const func = async (hre) => {
    const {deployments, getNamedAccounts} = hre;
    const {deployer} = await getNamedAccounts();
    const {deploy} = deployments;

    await deploy('myNFT', {
        from: deployer,
        log: true,
        skipIfAlreadyDeployed: true,
        args: ["myNFT", "DNT"]
    })

}

func.tags = ['myNFT', "BSC"]

module.exports = func;