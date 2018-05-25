const HumanStandardToken = artifacts.require("./HumanStandardToken.sol");

module.exports = function(deployer) {
  deployer.deploy(HumanStandardToken, 1000, "TestToken", 0, "TT");
};
