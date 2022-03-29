function getOption(){
    // console.log("My button is clicked");     //it shows o/p after clicking the button
    
//----using id name
    // let res = document.getElementById("elevation").innerText="This is a div tag"
    // console.log(res);  //it returns the innertext value
    
//----using class name
    // let res=document.getElementsByClassName("elevation")
    // res[0].innerText="Hello world"

//----change the text from hello to helloworld
    // document.getElementById("change").innerText="Hello World"

//----change the box from horizontal to vertical when we click on button
    // document.getElementById("container").style.flexDirection="column"

//----change the text color when clicking on the button
    // document.getElementById("change").style.color="red" 
    
//----displaying the content from the option
    // let res = document.getElementById("text")
    // let res1=res.value  
    // document.getElementById("output").innerText=res1 
}

// function clock(){


//     var hours = document.getElementById("hour");
//     var minutes = document.getElementById("min");
//     var seconds = document.getElementById("sec");
//     var am = document.getElementById("ampm");


//     var time = new Date();

//     var hrs = time.getHours();
//     var mins = time.getMinutes();
//     var secs = time.getSeconds();
//     var am_pm = "AM";


//     if (hrs == 0) {
//         hrs = 12;
//     }

//     if (hrs > 12) {
//         hrs = hrs - 12;
//         am_pm = "PM";
//     }
//     if (hrs < 10) {
//         hrs = "0" + hrs;
//     }
//     if (mins < 10) {
//         mins = "0" + mins;
//     }
//     if (secs < 10) {
//         secs = "0" + secs;
//     }
//     hours.innerText = hrs;
//     minutes.innerText = mins;
//     seconds.innerText = secs;
//     am.innerText = am_pm;
// }
// setInterval(clock,1000);



