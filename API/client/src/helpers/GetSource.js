function getSource(source) {
    switch (source) {
        case '<a href="http://twitter.com/download/iphone" rel="nofollow">Twitter for iPhone</a>':
            return "Sent from iPhone";
        case '<a href="https://mobile.twitter.com" rel="nofollow">Twitter Web App</a>':
            return "Sent from Web App";
        default:
            return "Sent from Android";
    }
}

export default getSource;
