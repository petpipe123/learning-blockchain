/*
 * NB: since truffle-hdwallet-provider 0.0.5 you must wrap HDWallet providers in a 
 * function when declaring them. Failure to do so will cause commands to hang. ex:
 * ```
 * mainnet: {
 *     provider: function() { 
 *       return new HDWalletProvider(mnemonic, 'https://mainnet.infura.io/<infura-key>') 
 *     },
 *     network_id: '1',
 *     gas: 4500000,
 *     gasPrice: 10000000000,
 *   },
 */


 
module.exports = {
  networks: {
    production: {
      host: "blcgns-dns-reg1.northeurope.cloudapp.azure.com",
      network_id: 10101010,
      port: 8545,
      from: "0x7d2a5976a4bdfbf22abe4c7e4e93691401c8c948",
      gas: 300000
    }
    }
  };
