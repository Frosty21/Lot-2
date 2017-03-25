const algorithm = 'aes-256-ctr';
const privateKey = '\\O^$\n.K\x1e\xee\xe1A\xfc\x9b\x03\xcf\xe3\xde\x8a\x06\xb6\xf9\x8e\x1cx\xad?n\xa4N.9\xd3\xdb\xc8\xc4\xf7\x1ew\xfa\x19wc0\xf5\x8a\x1az\xfc\xdae\xa2\x94i#r\xbd\xcf1\xd0}\xe4f*';

function decrypt(password) {
    let decipher = crypto.createDecipher(algorithm, privateKey);
    let dec = decipher.update(password, 'hex', 'utf8');
    dec += decipher.final('utf8');
    return dec;
}

// method to encrypt data(password)
function encrypt(password) {
    let cipher = crypto.createCipher(algorithm, privateKey);
    let crypted = cipher.update(password, 'utf8', 'hex');
    crypted += cipher.final('hex');
    return crypted;
}
