/* eslint-disable no-console */
/* eslint-disable no-undef */
export const state = () => ({
  web3: false,
  address: null
})

export const mutations = {
  setWeb3(state, web3) {
    state.web3 = web3
  },
  setAddress(state, address) {
    state.address = address
  }
}

export const getters = {
  getWeb3Status(state) {
    return state.web3
  },
  getCurrentAddress(state) {
    return state.address
  }
}

export const actions = {
  init: async function({ commit }) {
    if (typeof window.web3 === 'undefined') {
      alert('MetaMask not installed. Please Install and then Try Again')
      return { web3: false, address: '' }
    }
    const data = await window.ethereum.enable()
    commit('setWeb3', true)
    commit('setAddress', data[0])
    return { web3: true, address: data[0] }
  },
  wei_to_eth(wei) {
    return wei / 1000000000000000000
  },
  eth_to_wei(eth) {
    return eth * 1000000000000000000
  },
  formatPrice(wei) {
    return 'Ξ' + wei
  }
}
