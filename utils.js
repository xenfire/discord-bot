module.exports = class utils {
    formatArgs(args) {
        return args.join(' ').replace(',', '');
    }
    randomNumber(number) {
        return Math.floor(Math.random() * number) + 1;
    }
}