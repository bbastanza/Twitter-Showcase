export default function parseSearchTerm(searchTerm) {
    let parsedTerm = searchTerm;

    // hashTable
    const invalidCharacters = {
        ":": true,
        ".": true,
        "'": true,
        ",": true,
        "?": true,
        ";": true,
        "~": true,
        "`": true,
        "!": true,
        "#": true,
        $: true,
        "%": true,
        "^": true,
        "&": true,
        "*": true,
        "+": true,
        "-": true,
        "=": true,
        "[": true,
        "]": true,
        "{": true,
        "}": true,
        "\\": true,
        "|": true,
        '"': true,
        "<": true,
        ">": true,
    };

    if (searchTerm > 15) parsedTerm = searchTerm.substring(0, 15);

    for (const character of parsedTerm) {
        if (invalidCharacters[character]) {
            parsedTerm = parsedTerm.substring(0, parsedTerm.indexOf(character));
            break;
        }
    }
    return parsedTerm;
}
