export default function initFetchBitcoin() {

    
fetch('https://blockchain.info/ticker')
.then(res => res.json())
.then(json => {
    
    const preco = document.querySelector('.btc-preco');
    preco.innerText = (1000 / json.BRL.sell).toFixed(4)

}).catch(error => console.log(Error(error)));

}
