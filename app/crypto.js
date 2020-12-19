// const crypto = require('crypto');

// const algorithm = 'aes-256-ctr';
// const secretKey = 'vOVH6sdmpNWjRRIqCc7rdxs01lwHzfr3';
// const iv = crypto.randomBytes(16);

// const encrypt = (text) => {

//     const cipher = crypto.createCipheriv(algorithm, secretKey, iv);

//     const encrypted = Buffer.concat([cipher.update(text), cipher.final()]);

//     return {
//         iv: iv.toString('hex'),
//         content: encrypted.toString('hex')
//     };
// };

// const decrypt = (hash) => {

//     const decipher = crypto.createDecipheriv(algorithm, secretKey, Buffer.from(hash.iv, 'hex'));

//     const decrpyted = Buffer.concat([decipher.update(Buffer.from(hash.content, 'hex')), decipher.final()]);

//     return decrpyted.toString();
// };

// module.exports = {
//     encrypt,
//     decrypt
// };

// Nodejs encryption with CTR
var crypto = require('crypto'),
    algorithm = 'aes-256-ctr',
    password = 'd6F3Efeq';

 function encrypt(text){
  var cipher = crypto.createCipher(algorithm,password)
  var crypted = cipher.update(text,'utf8','hex')
  crypted += cipher.final('hex');
  return crypted;
}
 
 function decrypt(text){
  var decipher = crypto.createDecipher(algorithm,password)
  var dec = decipher.update(text,'hex','utf8')
  dec += decipher.final('utf8');
  return dec;
}
 module.exports = {
    encrypt,
    decrypt
};
// var hw = encrypt("hello world")
// outputs hello world
// console.log(decrypt(hw));