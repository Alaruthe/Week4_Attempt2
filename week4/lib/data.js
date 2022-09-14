import fs from 'fs';
import path from 'path';

const dataDir = path.join( process.cwd(), "data" );

export function getAllIds() {
    const filePath = path.join(dataDir, 'persons.json');

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

export function getSortedList() {

}

export async function getData(idRequested) {
    const filePath = path.join(dataDir, 'persons.json');

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