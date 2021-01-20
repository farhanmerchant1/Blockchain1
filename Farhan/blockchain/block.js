function blockchain(){
   this.chain=[];
   this.mempool=[]; 
}
blockchain.prototype.creatNewBlock = function(nonce,hash){
    if(this.chain.length==0){
        previueshash=null
    }else{
        previueshash= this.chain[this.chain.length-1].hash
    }
    let block={
        'height':this.chain.length,
        'timestemp':Date.now(),
        'transection':this.mempool,
        'previueshash':previueshash,
        'nonce':nonce,
        'hash':hash
        
    }
    this.chain.push(block)
    this.mempool=[]
    return "new block added"
}
blockchain.prototype.creatNewtx = function(amount,sender,reciver){
    let tx ={
        'amount':amount,
        'sender':sender,
        'reciver':reciver,
        'timestemp':Date.now()
    }
    this.mempool.push(tx)
    return 'transction completed'

}
module.exports = blockchain