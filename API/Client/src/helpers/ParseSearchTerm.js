export default function parseSearchTerm(searchTerm) {
    let parsedTerm = searchTerm;

    const regex = /[^A-Za-z0-9_]+/g;

    if (searchTerm > 15) parsedTerm = searchTerm.substring(0, 15);

    for (const character of parsedTerm) {
        if (regex.test(character)) {
            parsedTerm = parsedTerm.substring(0, parsedTerm.indexOf(character));
            break;
        }
    }
    return parsedTerm;
}
