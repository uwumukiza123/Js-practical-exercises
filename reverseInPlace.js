// reverse in place

/*
If you have a string like "I am the good boy". How can 
you generate "I ma eht doog yob"? Please note 
that the words are in place but reversed.
*/

const Reverse = (str)=> {
    return str.split(' ').reduce((acc, curr)=> {
        acc.push(curr.split('').reverse().join(''));
        return acc;
    }, []).join(' ')
}
console.log(Reverse("I am the good boy"))

// or

function reverse(str) {
    str = "I am the good boy";
    let result = str.split(" ").map(item => item.split("").reverse().join("")).join(" ")
    return result;
  }
  console.log(reverse())

