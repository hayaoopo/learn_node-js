const {
    EventEmitter
} = require('events')

const myEventEmitter = new EventEmitter()

const makeCoffe = ({
    name
}) => {
    console.log(`Kopi ${name} telah dibuat!`);
}

const makeBill = ({
    price
}) => {
    console.log(`Bil sebesar ${price} telah dibuat!`);
}

myEventEmitter.on('coffee-order', makeCoffe)
myEventEmitter.on('coffee-order', makeBill)

myEventEmitter.emit('coffee-order', {
    name: 'Tubruk',
    price: 15000
})