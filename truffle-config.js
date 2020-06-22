require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom argue blue shadow shock note muscle pull grace person equal genius'; 
let testAccounts = [
"0xdd4fe8f0aca84e54ee0f83b65159aa334ecc84a5e88643353e400e630fcbc173",
"0x91d501b7a1a84781a03fb3056b35c0422be06d3b016dbf45a530be4e9423d82c",
"0x2175b09b3ff40cee2c6c9e38128cf9862b8bd9de336d42142fcd01e3ea378a7e",
"0x502a47f92e434b2259e5717c0b03ef82916064256121887d0b24e467b36f2b54",
"0xf3e80ec6eb648f62d5b2902f24e9ebd689fa5e9fe1f7f135b364935299748519",
"0x4638fffc142e46d5ddc22e49b1c5e91cdbed05634aa21b95d21912177f9ab293",
"0xc32df0c220d69274d238402cc17483aa9243083c7fd48f52de50f8c2eab07f42",
"0xf2f0610c2072003bfb84ec77157fbc13f3cd3411324170367899ad08642570fa",
"0x34cc43b5adccac7658f85c578d5a65b97145e56850b67a6168c340945f7dbd17",
"0x0b608d8c9b9f12d4eddd68bf0ea84f0a4af0bc0a5d7ae7d54018eea0910b0b86"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
