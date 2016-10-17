var stream = require('stream');
var fs = require('fs');
var readStream = fs.createReadStream(__dirname + '/resume.md');
var writeStream = fs.createWriteStream(__dirname + '/resume-rot13.md');


var rot13 = new stream.Transform();
rot13._write = function (chunk, encoding, done) {
  var asdf = chunk.toString('utf8');
  asdf = asdf.trim().split('').map(x => {
    var charCode = x.charCodeAt() - 97;
    if (charCode >= 0 && charCode <= 26 ){
      return String.fromCharCode((charCode + 13)%26+97);
    }else {
      return x;
    }
  });                                                     
  this.push(asdf.join(''));
  done();
};

process.stdin.pipe(rot13).pipe(process.stdout);
//readStream.pipe(rot13).pipe(writeStream);
