module.exports = function({ary,cb,func,props}) {
    let i = -1
    let count = ary.length
    function next() {
        i++
        if(i < count){
            // cl("function next went to next in loop")
            func(ary[i],...props,next)
        }else{
            // cl(`function next went to cb and cb is ${cb} , ${cb.toString}`)
            cb(...props)
        }
    }
    next()
}

