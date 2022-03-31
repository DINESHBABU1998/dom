let studentRecords = [ {name: 'John', id: 123, marks : 98 },
{name: 'Baba', id: 101, marks : 23 },
{name: 'yaga', id: 200, marks : 45 },
{name: 'Wick', id: 115, marks : 75 } ] 

//"Question 1 : We are interested in retrieving only the name of the students and all the names should be in caps.
// for(let i=0;i<studentRecords.length;i++){
//    let res = studentRecords[i].name.toUpperCase()
//    console.log(res);
// }

//"Question 2: Suppose we have the same dataset as above but this time we want to get the details of students who scored more than 50 marks
// for(let i=0;i<studentRecords.length;i++){
//     let res = studentRecords[i].marks > 50
//     if(res){
//         console.log(studentRecords[i]);
//     }
// }

//Question 3: Retrieve the details of students who scored more than 50 marks and have id greater than 120.
// for(let i=0;i<studentRecords.length;i++){
//     let res = studentRecords[i].marks > 50 && studentRecords[i].id > 120
//     if(res){
//         console.log(studentRecords[i]);
//     }
// }

//Question 4: Consider the same scenario we have discussed above, but this time we would like to know the sum total of the marks of the students.
// let res = studentRecords.map(item => item.marks)  
// let res1=res.reduce((acc,curr)=>{
//     acc+=curr
//     return acc
// },0)
// console.log(res1);

//Question 5: This time we want to get only the names of the students who scored more than 50 marks from the same dataset used above.
// for(let i=0;i<studentRecords.length;i++){
//     let res = studentRecords[i].marks > 50
//     if(res){
//     console.log(studentRecords[i].name);
// }
// }

//Question 6: This time we are required to print the sum of marks of the students with id > 120.
// let res = studentRecords.filter(item => item.id > 120).map(item=>item.marks).reduce((acc,curr)=>{
//     acc+=curr
//     return acc
// },0)
// console.log(res);

//Question 7: This time we are required to print the total marks of the students with marks greater than 50 after a grace of 15 marks has been added to those students who scored less than 50.
// let res = studentRecords.map(function (item) {
//     if (item.marks < 50) {
//       item.marks += 15;
//     }
//     return item;
//   })
//   .filter((item) => item.marks > 50)
//   .reduce((acc, curr) => acc + curr.marks, 0);
// console.log(res)

//Create 6 objects , each object will have name, class, roll no as properties. Store these objects in an array of objects. 
// let obj1={name:"dinesh", class:'EA-A',rollno:100}
// let obj2={name:"ramesh", class:'EA-B',rollno:101}
// let obj3={name:"suresh", class:'EA-C',rollno:102}
// let obj4={name:"rajesh", class:'EA-D',rollno:103}
// let obj5={name:"duraij", class:'EA-E',rollno:104}
// let obj6={name:"vigesh", class:'EA-F',rollno:105}

// let arr=[{name:"dinesh", class:'EA-A',rollno:100},{name:"ramesh", class:'EA-B',rollno:101},{name:"suresh", class:'EA-C',rollno:102}
// ,{name:"rajesh", class:'EA-D',rollno:103},{name:"duraij", class:'EA-E',rollno:104},{name:"vigesh", class:'EA-F',rollno:105}]
// console.log(arr);
