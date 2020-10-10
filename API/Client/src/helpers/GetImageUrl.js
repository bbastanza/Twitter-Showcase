export default function getImageUrl(tweetData) {
    let imageUrl = "";
    if (tweetData.extendedEntities !== null) {
        imageUrl = tweetData.extendedEntities.extendedMedia[0].extendedMediaUrl;
    }
    return imageUrl;
}
