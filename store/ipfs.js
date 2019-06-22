import ipfsClient from 'ipfs-http-client'

// eslint-disable-next-line no-unused-vars
const ipfs = ipfsClient(process.env.ipfsHOST, process.env.ipfsPORT, {
  protocol: 'http'
})

export const state = () => ({
  ipfsHash: null,
  ipfsData: {}
})

export const mutations = {
  setHash(state, hash) {
    state.ipfsHash = hash
  },
  setIpfsData(state, data) {
    state.ipfsData = data
  }
}

export const actions = {
  storeData: async function({ commit }, data) {
    try {
      const results = await ipfs.add(Buffer.from(JSON.stringify(data)))
      commit('setHash', results[0].hash)
      commit('setIpfsData', data)
      return results[0].hash
    } catch (e) {
      // eslint-disable-next-line no-console
      console.log(e)
    }
  },
  getByHash: async function({ dispatch, commit }, hash) {
    try {
      const results = await ipfs.cat(hash)
      return results.toString('utf8')
    } catch (e) {
      // eslint-disable-next-line no-console
      console.log(e)
    }
  }
}
