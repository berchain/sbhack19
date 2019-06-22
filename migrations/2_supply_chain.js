// eslint-disable-next-line no-undef
const SupplyChain = artifacts.require('SupplyChain')

module.exports = function(deployer) {
  deployer.deploy(SupplyChain)
}
