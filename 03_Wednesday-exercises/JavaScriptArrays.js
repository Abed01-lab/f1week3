//Exercise A
var boys = ["Peter", "Lars", "Ole"];
var girls = ["Janne", "hanne", "Sanne"];

//Exercise B
var all = boys.concat(girls);
console.log(all);

//Exercise C
console.log(all.join());
console.log(all.join('-'));

//Exercise D
console.log(all.unshift());
console.log(all.unshift("Hans", "Kurt"));

//Exercise E
all.push("Lone", "Gitte");
console.log(all.join());

//Exercise F
all.shift();
console.log(all.join());

//Exercise G
all.pop();
console.log(all.join());

//Exercise H
all.splice(3, 1);
all.splice(3, 1);
console.log(all.join());

//Exercise I
all.reverse();
console.log(all.join());

//Exercise J
all.sort();
console.log(all.join());

//Exercise K


//Exercise L
var allUpperCase = all.map(name => name.toUpperCase());
console.log(allUpperCase.join());

//Exercise M
var allSorted = all.filter((name) => {
    if (name.startsWith("L") || name.startsWith("I")){
        return name;
    }
})
console.log(allSorted.join());