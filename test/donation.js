/* eslint-disable no-undef */
const donation = artifacts.require('donation')

// eslint-disable-next-line require-await
contract('donation', async accounts => {
  it('test coin mint', async () => {
    const instance = await donation.deployed()
    instance.buy({ value: 500000, from: accounts[9] })
    const balance = await instance.balanceOf(accounts[9])
    assert.equal(balance.toString(), 500000)
  })
})
