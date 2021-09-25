var collection = {
    2548: {
        album: "Slippery When Wet",
        artist: "Bon Jovi",
        tracks: [
            "Let It Rock",
            "You Give Love a Bad Name"
        ]
    },
    2468: {
        album: "1999",
        artist: "Prince",
        tracks: [
            "1999",
            "Little Red Convette"
        ]
    },
    1245: {
        artist: "Robert Palmer",
        tracks: [ ]
    },
    5439: {
        album: "ABBA Gold"
    }
};

// Keep a copy of the collection for tests
var oldCollection = JSON.parse(JSON.stringify(collection));


function updateRecords(objects, id, prop, value) {
    // Only change code below this line
    if(prop == "artist" && value !== "") {
        //return value;
        objects[prop] = value;
    } else if(objects.hasOwnProperty(prop) && value == "") {
        delete objects[prop];
    }
    if(prop == "album") {
        if(objects.hasOwnProperty(prop) && value !== "") {
            objects = value;
        } else if(objects.hasOwnProperty(prop) && value == "") {
            delete objects[prop];
        }
    }
    if(prop == "tracks") {
        if(objects.hasOwnProperty(prop) && value !== "") {
            objects[prop].push(value);
        } else if (!objects.hasOwnProperty(prop) && value !== "") {
            objects[prop] = [value];
        }
    }
    return objects;
    // Only change code above this line
}

console.log(updateRecords(collection, 5439, "artist", "ABBA" )); // Change this line
console.log(updateRecords(collection, 5439, "tracks", "Take a Chance on Me" ));
console.log(updateRecords(collection, 2548, "artist", "" ));
console.log(updateRecords(collection, 1245, "tracks", "Addicted to Love" ));
module.exports = updateRecords;