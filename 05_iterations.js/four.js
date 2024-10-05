const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: 'ruby',
    swift: "Swift by Apple"
}

for (const key in myObject) {
    console.log(`${key} shortcut is for ${myObject[key]}`);
    
}

const programming = ["js", "rb", "py", "java", "cpp"]

for (const key in programming) {
    console.log(programming[key]);
    
}

/*
const map = new Map()
map.set('IN', "India")
map.set('UAE', "United Arab Emirates")
map.set('PAK', "Pakistan")
map.set('BANG', "Bangladesh")
map.set('USA', "United States of America") // existing
map.set('USA', "United States America") // updated

for (const key in map) {
    console.log(map[key]);
    
}
    */