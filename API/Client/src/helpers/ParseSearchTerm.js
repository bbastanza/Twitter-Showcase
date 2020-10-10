export default function parseSearchTerm(searchTerm) {
    let parsedTerm = searchTerm;

    var invalidCharacters = ":.',?;~`!#$%^&*+=-[]\\/{}|\"<>";

    if (searchTerm > 15) parsedTerm = searchTerm.substring(0, 15);

    for (const character of invalidCharacters) {
        if (parsedTerm.includes(character)) {
            parsedTerm = searchTerm.substring(0, parsedTerm.indexOf(character));
            break;
        }
    }

    return parsedTerm;
}

// .extended_entities.media
