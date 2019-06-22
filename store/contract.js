/**
 * All the contract related operations
 */
import SupplyChain from '../build/contracts/SupplyChain.json'
export const state = () => ({
  supplychain: '0x5d9c8515ff01eD287b940c311B7175da9ddF31D2',
  donation: ''
})

export const actions = {
  getProductInfo: function({ rootState: { web3 }, state }, id) {
    if (web3) {
      const contract = window.web3.eth
        .contract(SupplyChain.abi)
        .at(state.supplychain)
      return contract.getProductInfo(id, (err, data) => {
        if (err) {
          throw Error(err)
        }
        return data
      })
    } else {
      throw Error('Web3 not found')
    }
  }
}
