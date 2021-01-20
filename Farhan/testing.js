const blockchain = require('./blockchain/block.js')

var chain = new blockchain()
chain.creatNewBlock(2564,'phash','chash')
chain.creatNewtx(50,'bilal','zohaib')

chain.creatNewBlock(2565,'phash1','chash1')
chain.creatNewtx(100,'bilal','zohaib')


console.log(chain)
