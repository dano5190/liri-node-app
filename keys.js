console.log('this is loaded');

exports.spotify = {
    id: process.env.SPOTIFY_ID,
    secret: process.env.SPOTIFY_SECRET
};

exports.omdb = {
    api: process.env.OMDB_KEY
};

exports.bit = {
    api: process.env.BIT_KEY
};