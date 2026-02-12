import { createReadStream } from 'node:fs';

const symbolCounters = { 'a' : 0};

const stream = createReadStream('text.txt');
stream.on('data', (chunk) => {

    const str = chunk.toString();
    for(let i = 0; i <str.length; i++){
        if (str[i] === 'a'){
            symbolCounters['a']+= 1;
        }
    }

});
console.table(symbolCounters)