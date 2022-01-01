require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hunt case area smoke birth rival outside plastic coral light army gesture'; 
let testAccounts = [
"0xc610fe70896938dc25699b187bf197357852befec0cfcfc3bdac44f3c0eab193",
"0x4cc1f059acafded3fa57bc6e43d1db0f74c8727a8383ae7c12b1e9c39edf2212",
"0xaa1de56fafa45755f63ef537b4aadaf3f11d574ef97d3ff87610d8e73332819f",
"0xcf0b0f110db2b85d2c93c36f65be6aaae4e2bbe3c312afcb246d30df948923cd",
"0xcb134a2e17d0bd4f123c35547f947403a589d3b37fc0babbf5ecd25e91a726bf",
"0x95727053407e99c2849976d75167ce2dd2b554872bf77c5c1525313b38272e69",
"0xb4781bb77eda686bf22facef6ac4c048dc0a327980cb57859f0108c35ed7f547",
"0xbe34a3bebc0c3582a1d7253cf5f1ea1d2f6720d3cda2c0c527a3a033884b8340",
"0x2d7b1ea1a25b5106ba9871cac3b9620ee2df16b7cc37bdc9af50f0a9fa48659c",
"0xcb52217a804952bed542036d721450e02015ee9a25bfa6169d3e7c1dcd5e7640"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


