exports.randomStr =(length = 10) => {
    let i, possible, text;
    text = '';
    possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    i = 0;
    while (i < length) {
        text += possible.charAt(Math.floor(Math.random() * possible.length));
        i++;
    }
    return text;
};

