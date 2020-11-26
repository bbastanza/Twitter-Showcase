export default function parseSearchTerm(searchTerm) {
    let parsedTerm = searchTerm;

    // const regex = /[^A-Za-z0-9_]+/g;
    
    const valid = {
        a: true,
        b: true,
        c: true,
        d: true,
        e: true,
        f: true,
        g: true,
        h: true,
        i: true,
        j: true,
        k: true,
        l: true,
        m: true,
        n: true,
        o: true,
        p: true,
        q: true,
        r: true,
        s: true,
        t: true,
        u: true,
        v: true,
        w: true,
        x: true,
        y: true,
        z: true,
        "1": true,
        "2": true,
        "3": true,
        "4": true,
        "5": true,
        "6": true,
        "7": true,
        "8": true,
        "9": true,
        "0": true,
        "_": true
    }

    if (searchTerm > 15) parsedTerm = searchTerm.substring(0, 15);

    for (const character of parsedTerm) {
        if (!valid[character.toLowerCase()]) {
            parsedTerm = parsedTerm.substring(0, parsedTerm.indexOf(character));
            break;
        }
    }
    console.log(parsedTerm)
    return parsedTerm;
}
