let IsLoggedIn=()=>sessionStorage.getItem("jwt")?true:false;
let IsAdmin=()=>JSON.parse(sessionStorage.getItem("roles")).includes("ADMIN");
let IsUser=()=>JSON.parse(sessionStorage.getItem("roles")).includes("USER");
let IsProvider=()=>JSON.parse(sessionStorage.getItem("roles")).includes("Provider");
let IsCustomer=()=>JSON.parse(sessionStorage.getItem("roles")).includes("CUSTOMER");

let getUser=()=>JSON.parse(sessionStorage.getItem("user"));
let getName=()=>JSON.parse(sessionStorage.getItem("user")).firstName + " " + JSON.parse(sessionStorage.getItem("user")).lastName;


export default {IsLoggedIn , IsAdmin,IsUser,IsProvider, getUser,IsCustomer, getName};