let map = new Map();
map.set('22', 'Thang')
map.set(22, 'Van')
map.set(true, 'Nguyen')
console.log("LastName at index 22: " +map.get('22'));
console.log("MiddleName at index 22: " +map.get(22));
console.log("Size of the map: " +map.size);
for (let Value of map.keys()) {
    console.log("Value = " + Value);
}
for (let fullNames of map.values()) {
    console.log(" fullNames = " + fullNames);
}
for(let entry of map.entries()) {
    console.log(entry[0],entry[1]);
}
    
for (let [key, value] of map) {
    console.log("key value pairs: ", key, value);
}


map.delete('22');

for(let entry of map.entries()) {
    console.log(entry[0],entry[1]);
}



map.clear() 
for(let entry of map.entries()) {
    console.log(entry[0],entry[1]);
}


console.log(map.size);
