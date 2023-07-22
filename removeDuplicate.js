// remove duplicates
let removeDuplicates;
function removeDuplicate(arr) {
    removeDuplicates = arr.reduce((a, b) => {
        if(a.indexOf(b) === -1) {
            a.push(b)
        }
       return a
    },[])
    return removeDuplicates;
}
console.log(removeDuplicate(["a","b","c", "a", 1, 1, 2, 3]))