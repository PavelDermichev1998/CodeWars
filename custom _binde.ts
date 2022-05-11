Function.prototype._binde = function (ctx, ...args) {
    ctx.__self__ = this
    //@ts-ignore
    return function (...args2) {
        return ctx.__self__(...args, ...args2)
    }
}
