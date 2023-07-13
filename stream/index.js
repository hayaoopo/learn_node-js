const fs = require('fs');

const readableStream = fs.createReadStream('input.txt');

const writableStream = fs.createWriteStream('output.txt');

readableStream.on('readable', () => {
    try {
        writableStream.write(`${readableStream.read()}`);
    } catch (error) {
        // catch the error when the chunk cannot be read.
    }
});

readableStream.on('end', () => {
    // writableStream.write(readableStream);
    writableStream.end();
    console.log('Done');
});