export default function fBitcoin(url,target) {

    
fetch(url)
.then(res => res.json())
.then(json => {
    
    const preco = document.querySelector(target);
    preco.innerText = (1000 / json.BRL.sell).toFixed(4)

}).catch(error => console.log(Error(error)));

}
