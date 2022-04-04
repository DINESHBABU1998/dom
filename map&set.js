//You are given a string (STR) of length N, consisting of only the lower case English alphabet.Your task is to remove all the duplicate occurrences of characters in the string. Input:abcadeecfb
// let str = "abcadeecfb";
// let res = Array.from(new Set(str)).join("");
// console.log(res);   //output is abcdef


//You are given a string (STR) of length N, you have to print the count of all alphabet.(using maps) .Input:abcadeecfb
// let s = "abcadeecfb";
// let result = [...s].reduce(
//   (res, char) => ((res[char] = (res[char] || 0) + 1), res),
//   {}
// );
// console.log(result); // Output:
                        // a=2
                        // b=2
                        // c=2
                        // d=1
                        // e=2
                        // f=1