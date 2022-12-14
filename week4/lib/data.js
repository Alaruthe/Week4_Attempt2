import fs from 'fs';
import path from 'path';

const dataDir = path.join( process.cwd(), "data" );

export function getAllIds(isdogs) {
    const filename = (isdogs)?"listing.json":"persons.json";

    const filePath = path.join(dataDir, filename);

    const jsonString = fs.readFileSync(filePath, 'utf8');

    const jsonObj = JSON.parse(jsonString);

    const returnedData = jsonObj.map(item => {
        return {
            params: {
                id: item.id.toString()
            }
        }
    });

    return returnedData;
}

export function getSortedList(isdogs) {
    const filename = (isdogs)?"listing.json":"persons.json";

    const filePath = path.join(dataDir, filename);

    const jsonString = fs.readFileSync(filePath, 'utf8');

    const jsonObj = JSON.parse(jsonString);

    jsonObj.sort(function (a,b) {
        return a.name.localeCompare(b.name);
    });

    return jsonObj.map(item => {
        return {
            id: item.id.toString(),
            name: item.name
        }
    });
}

export async function getData(idRequested, isdogs) {
    const filename = (isdogs)?"listing.json":"persons.json";

    const filePath = path.join(dataDir, filename);

    const jsonString = fs.readFileSync(filePath, 'utf8');

    const jsonObj = JSON.parse(jsonString);

    const objMatch = jsonObj.filter( obj => {
            return obj.id.toString() === idRequested;
        }
    );

    let objReturned;
    if(objMatch.length > 0) {
        objReturned = objMatch[0];
    } else {
        objReturned = {};
    }

    return objReturned;
}