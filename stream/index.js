const stream = require('stream');
const fs = require('fs');
const moment = require('moment');

class DateReadable extends stream.Readable {
    _read() {
        setTimeout(() => {
            this.push((new Date).toISOString());
        }, 1000);
    }
}

class DateTransform extends stream.Transform {
    _transform(chunk, encoding, callback, ) {
        const date = moment(chunk.toString()).format('DD/MM/YYYY HH:mm:ss');
        
        callback(null, `${date}\r\n`);
    }
}

const dateReadable = new DateReadable();
const dateTransform = new DateTransform();
const dateWritable = fs.createWriteStream('./text.txt');

dateReadable.pipe(dateTransform);
dateTransform.pipe(dateWritable);
