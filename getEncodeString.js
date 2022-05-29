/**
 * // Excel的列命名规则，将整数的编号转换成字符串的形式。
// 给出一个数 
// index，令 
// 1=A, 
// 2=B，
// 26=Z，
// 27=AA ... 最后 
// ... az 52 53 = ba
// 702=ZZ，每行最多有 
// 702 个编号。当 
// index>702 时，需要换一行，并重新开始编号，并重新从 
// A 开始编号，如 
// 703=A，
// 705=C。每满 
// 702 个数都要换行，重新开始编号。
// 最后转换的结果为 
// index 所在的行号加上他的编号。
// 如最终 
// 1=1A,2=1B,3=1C,26=1Z,27=1AA,702=1ZZ,705=2C,1404=2ZZ。
// 如 705 在第 2 行，编号为 C，所以它通过转换得到的字符串是 2C。

52 - 26 = 26
26 / 26 = 1

53 - 26 = 27
27/26 = 2

1 - 26  a-z
1*26 + 1 - 1*26 + 26 aa-az
...
26*26 + 1 - 26*26 + 26 za - zz

 */


function getStr(num){
    if(num <= 0) return ''
    const index = parseInt(num)
    
    const row  = Math.ceil(index / 702)
    const col = index - (row - 1) * 702
    const character = getCol(col)
    console.log(row.toString() + character)
    return '' + row + character
}
function getCol(col){
    let first = 0, second = ''
    if(col <= 26){
        second = col
    }
    else{
        first = Math.ceil((col - 26) / 26)
        second = col - first * 26
    }
    // const first = Math.floor(col / 26) - 1
    // const left = col - first * 26
    return getCharacter(first) + getCharacter(second)
    
}
function getCharacter(col){
    const arr = ['','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
    return arr[col]
}
getStr(1404)