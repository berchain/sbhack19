/**
 * All the contract related operations
 */
import SupplyChain from '../build/contracts/SupplyChain.json'
import Donation from '../build/contracts/donation.json'
export const state = () => ({
  supplychain: '0x5d9c8515ff01eD287b940c311B7175da9ddF31D2',
  donation: '0xf3aB3e5c6617E18fb9842308Dfa91eB755e92b35'
})

export const actions = {
  getProductInfo: function({ rootState: { web3 }, state }, id) {
    if (web3) {
      const contract = window.web3.eth
        .contract(SupplyChain.abi)
        .at(state.supplychain)
      return new Promise((resolve, reject) => {
        contract.getProductInfo(id, (err, data) => {
          if (err) {
            reject(err)
          }
          resolve(data)
        })
      })
    } else {
      throw Error('Web3 not found. Go to the home page and try again.')
    }
  },
  addProduct: function(
    { rootState: { web3 }, state },
    { id, ipfs, certifier }
  ) {
    if (web3) {
      const contract = window.web3.eth
        .contract(SupplyChain.abi)
        .at(state.supplychain)
      return new Promise((resolve, reject) => {
        contract.addProduct(ipfs, id, certifier, (err, data) => {
          if (err) {
            reject(err)
          }
          resolve(data)
        })
      })
    } else {
      throw Error('Web3 not found. Go to the home page and try again.')
    }
  },
  sendToProcessor: function(
    { rootState: { web3 }, state },
    { id, ipfs, processor }
  ) {
    if (web3) {
      const contract = window.web3.eth
        .contract(SupplyChain.abi)
        .at(state.supplychain)
      return new Promise((resolve, reject) => {
        contract.sendToProcessor(ipfs, id, processor, (err, data) => {
          if (err) {
            reject(err)
          }
          resolve(data)
        })
      })
    } else {
      throw Error('Web3 not found. Go to the home page and try again.')
    }
  },
  sendToDistributor: function(
    { rootState: { web3 }, state },
    { id, ipfs, distributor }
  ) {
    if (web3) {
      const contract = window.web3.eth
        .contract(SupplyChain.abi)
        .at(state.supplychain)
      return new Promise((resolve, reject) => {
        contract.sendToDistributor(ipfs, id, distributor, (err, data) => {
          if (err) {
            reject(err)
          }
          resolve(data)
        })
      })
    } else {
      throw Error('Web3 not found. Go to the home page and try again.')
    }
  },
  sendToRetailer: function(
    { rootState: { web3 }, state },
    { id, ipfs, retailer }
  ) {
    if (web3) {
      const contract = window.web3.eth
        .contract(SupplyChain.abi)
        .at(state.supplychain)
      return new Promise((resolve, reject) => {
        contract.sendToRetailer(ipfs, id, retailer, (err, data) => {
          if (err) {
            reject(err)
          }
          resolve(data)
        })
      })
    } else {
      throw Error('Web3 not found. Go to the home page and try again.')
    }
  },
  markPackaged: function({ rootState: { web3 }, state }, { id, ipfs }) {
    if (web3) {
      const contract = window.web3.eth
        .contract(SupplyChain.abi)
        .at(state.supplychain)
      return new Promise((resolve, reject) => {
        contract.markPackaged(ipfs, id, (err, data) => {
          if (err) {
            reject(err)
          }
          resolve(data)
        })
      })
    } else {
      throw Error('Web3 not found. Go to the home page and try again.')
    }
  },
  markSold: function({ rootState: { web3 }, state }, { id, ipfs }) {
    if (web3) {
      const contract = window.web3.eth
        .contract(SupplyChain.abi)
        .at(state.supplychain)
      return new Promise((resolve, reject) => {
        contract.markSold(ipfs, id, (err, data) => {
          if (err) {
            reject(err)
          }
          resolve(data)
        })
      })
    } else {
      throw Error('Web3 not found. Go to the home page and try again.')
    }
  },
  buy: function({ rootState: { web3 }, state }, amount) {
    if (web3) {
      const contract = window.web3.eth.contract(Donation.abi).at(state.donation)
      const options = {
        value: amount
      }
      return new Promise((resolve, reject) => {
        contract.buy(options, (err, data) => {
          if (err) {
            reject(err)
          }
          resolve(data)
        })
      })
    } else {
      throw Error('Web3 not found. Go to the home page and try again.')
    }
  },
  donate: function({ rootState: { web3 }, state }, { to, amount }) {
    if (web3) {
      const contract = window.web3.eth.contract(Donation.abi).at(state.donation)
      return new Promise((resolve, reject) => {
        contract.donate(to, amount, (err, data) => {
          if (err) {
            reject(err)
          }
          resolve(data)
        })
      })
    } else {
      throw Error('Web3 not found. Go to the home page and try again.')
    }
  }
}
