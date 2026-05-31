// JS splits the engine memory into two Stacks and Heaps.

// The Stack: Fast, Rigid, and Primitive
// The Stack is incredibly fast, organized, and holds data with a fixed size. JavaScript uses it to store Primitive Values(jo hme milti hai starting mei) (Strings, Numbers, Booleans, null, undefined).

// When you pass or copy a primitive variable, JavaScript makes a 100% independent real duplicate copy of that value in a new stack location. JS jo copy hai vo new memory location pr Stack mei bnata hai taki usme koi changes original ko tang na kre.
//Ex:->  let org=25; let copy=org; copy=26; c.l(org)=25, c.l(copy)=26;

// The Heap: Large, Dynamic, and Reference-Based
// Heap is a giant unorganized pool of memory designed to store heavy, dynamic structures like Objects, Arrays, and Functions. kyu? becaus unka size grow.shrink kr skta h toh stack mei fit na beth the voh.
// toh ya hota ai jb hmne obj bnaya toh structure gya heap mei variable name gya stack mei and uske sth refrence hota hai heap ka. toh fr hmne var2 ==var1 krdiya toh jo heap ka address tha vo gya var2 ke pass. so now var2 can change values- var2.name="ravi".

// So to overcome this drawback we have two option shallow copy and deep copy

var person={
    name:"Sagar",
    address:{
        city:"Pinjore",
        pincode:134102,
    }
};
// var person2={...person};
// console.log(person2);
// person2.address.city="Panchkula";
// console.log(person2); //it changed to pkl. because nested one still share refrence of same heap memeory

// var person3=structuredClone(person);
// console.log(person3);
// person3.address.city="Pune";
// console.log(person3);
// console.log(person);

function deepClone(person){
    if(person===null || typeof person!=="object"){
        return person;
    }
    let person4=Array.isArray(person)?[]:{};
    for(let item in person){
        person4[item]=deepClone(person[item]);
    }
    return person4;
}

var person3=deepClone(person);
console.log(person3);
person3.address.city="Pune";
console.log(person3);
console.log(person);

// ---------EVENT PROPAGATION (BUBBLING AND DELEGATION)--------------Doen in html file

// 0-----------Debouncing--------------

// debonce function bnaya jisme hmne fn liya jo ki user ka data fecth kr rha h input se and delay dia ki kitne time ka delay chaiye hme and then we used a timerID to eep the track of setTimeout and hmne return kia ek esa function ki jisme debounced enabled hai

function debounce(fn,delay){
    let timerId;
    return function(...args){
        clearInterval(timerId); //to reset the timer of previous api call which was happened on the keystroke as 1s ni hua tha abhi.toh call jane ke liye timer chl rha tha
        timerId=setTimeout(()=>{
            fn(...args);
        },delay);
    }
}

// user ne search krna tha with some query okay if debounce na lga ho toh sb ke liye call hoga but hmne debounce lgaya kki bhai 1second tk agar koi input na aai toh run hona toh 1s ke baad hardjs run hua and showed the output.

function search(query){
    console.log("Searched query by the user ", query);
}
// search('HA');
// search('HAr');
// search('HARD');
// search('HARDJS');
const searchWithDebounce=debounce(search,1000);

searchWithDebounce('HA');
searchWithDebounce('HAr');
searchWithDebounce('HARD');
searchWithDebounce('this one is done after debounce: HARDJS');

// --------------THROTTLE------------------------------------------
// it means hmne agar ek time window lga rkhi hai uske andr jitni mrji call kro function toh vo function us time fram mei ignore krega and jaise hi vo time fram eover hoga he will provide you response /result
// live comments in youtube if we comment and there is slow mode active then the chatbot gets diabled for 60 seconds amd after 60s it gets enable just like resend otp.

function throttle(fn,delay){
    let lastcall=0;

    return function(...args){
        const now=Date.now();
        if(now-lastcall>delay){
            lastcall=now;
            fn(...args);
        }
        else{
            return;
        }
    }
}

function sendOtp(otp){
    console.log("OTP is: ", otp);
}
const sendOtpwithThrottle=throttle(sendOtp,10000);
sendOtp("223");
sendOtp("321");
sendOtp("123"); //it will show all the otp simultaneously so we have to prooitbit to not send before 5 seconds.



