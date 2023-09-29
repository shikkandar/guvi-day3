//given Json
let obj1={name:"hakkim  e",age:21,address:"kerala"}
let obj2={Name:"shikkandar",age:21,location:"kerala"}

//spliting Json keys and values and convert to lowercase
let [obj1Key, obj1val]=[Object.keys(obj1).join(" ").toLowerCase(),Object.values(obj1).join(" ").toLowerCase()]
let [obj2Key, obj2val]=[Object.keys(obj2).join(" ").toLowerCase(),Object.values(obj2).join(" ").toLowerCase()]


//sorting and convert keys and value to sting 
let [JsonKey1,Jsonval1]=[obj1Key.split(" ").sort().join(" "),obj1val.split(" ").sort().join(" ")]
let [Jsonkey2,Jsonval2]=[obj2Key.split(" ").sort().join(" "),obj2val.split(" ").sort().join(" ")]

//condition and result
console.log(obj1);
console.log(obj2);
if (JsonKey1===Jsonkey2 && Jsonval1===Jsonval2) {
    console.log("Json keys and values both are equal");
}else if (JsonKey1===Jsonkey2) {
    console.log("Json keys are equal");
}else if (Jsonval1===Jsonval2) {
    console.log("Json values are equal");
}else console.log("Json key and value both are not equal");


