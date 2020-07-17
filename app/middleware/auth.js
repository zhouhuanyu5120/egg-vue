const crypto = require('crypto');
const md5 = require('md5');

function encryption(data) {
    var key = 'OnEcX82slrLzNRIp';
    var iv = "0000000000000000";
    var clearEncoding = 'utf8';
    var cipherEncoding = 'hex';
    var cipherChunks = [];
    var cipher = crypto.createCipheriv('aes-128-cbc', key, iv);
    cipher.setAutoPadding(true);

    cipherChunks.push(cipher.update(data, clearEncoding, cipherEncoding));
    cipherChunks.push(cipher.final(cipherEncoding));

    return cipherChunks.join('');
}

function decryption(data) {
    var key = 'OnEcX82slrLzNRIp';
    var iv = "0000000000000000";
    var clearEncoding = 'utf8';
    var cipherEncoding = 'hex';
    var cipherChunks = [];
    var decipher = crypto.createDecipheriv('aes-128-cbc', key, iv);
    decipher.setAutoPadding(true);

    cipherChunks.push(decipher.update(data, cipherEncoding, clearEncoding));
    cipherChunks.push(decipher.final(clearEncoding));

    return cipherChunks.join('');
}


module.exports = (options, app) => {
    return async function WebAuthentication(ctx, next) {
        // sign值验证用户，保存用户到当前请求
        var sign = ctx.query.sign;
        if (sign) {
            var des_sign = decryption(sign);
            var [username, uid, mtime] = des_sign.split('}');

            var timestamp1 = Date.parse(new Date());
            var timestamp2 = mtime / 1000;
            if (Math.abs(timestamp1 - timestamp2) > 3600) {
                console.log('sign_time_error')
                // todo 返回错误
            }

            var user_list = await ctx.model.User.findAll({
                where: {
                    name: username
                },
            });
            if (user_list) {
                var user = user_list[0];
                // todo 根据用户id判断uid是否正确
                var user_sign = md5(user.id + 'element');
                if (user_sign === uid) {
                    ctx.user = user;
                    ctx.session.user = user;
                }
            }
        }
        await next();
    };
};