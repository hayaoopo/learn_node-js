// Panggil File dengan Asyncron
const fs = require('fs')

const fileReadCallback = (error, data) => {
    if (error) {
        console.log(`Gagal membaca berkas`);
        return
    }

    console.log(data);
}

fs.readFile('notes.txt', 'utf-8', fileReadCallback)

// Panggil file dengan Syncron

// const data = fs.readFileSync('notes.txt', 'utf-8')

// console.log(data);