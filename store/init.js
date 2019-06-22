/*jshint esversion: 8 */

App = {
  account: '',
  address: '0xa0dfbf1fbd9c7c32700c1c93027409f2936cb1c5',
  contract: '',
  options: {
    from: this.account
  },

  init: async function(run) {
    if (typeof web3 !== 'undefined') {
      // If a web3 instance is already provided by Meta Mask.
      web3Provider = web3.currentProvider;
      web3 = new Web3(web3.currentProvider);
    } else {
      // Specify default instance if no web3 instance provided
      console.log("Metamask Unavailable");
      return;
    }
    await ethereum.enable();
    return App.init_contract(run);
  },

  get_balance: function(cb) {
    web3.eth.getBalance(App.account, cb);
  },

  init_contract: function(run) {
    $.getJSON( "sbhack19/build/contracts/donation.json", function( jsonInterface ) {
      //console.log(jsonInterface);
      App.contract = web3.eth.contract(jsonInterface.abi).at(App.address);
      App.account = web3.eth.defaultAccount;
      App.options.from = web3.eth.defaultAccount;
      console.log(App.contract);
      run();
    });
  },

  donate: async function(to, amount) {
    options = {
      from: App.account,
      value: amount
    };
    await promisify(cb => App.contract.donate(to, options, cb));
  }
};

// Util to make async calls into promises
promisify= (inner) =>
    new Promise((resolve, reject) =>
        inner((err, res) => {
            if (err) {
                reject(err);
            } else {
                resolve(res);
            }
        })
    );

function wei_to_eth(wei) {
  return wei / 1000000000000000000;
}

function eth_to_wei(eth) {
  return eth * 1000000000000000000;
}

function formatPrice(wei) {
  return 'Ξ' + wei;
}