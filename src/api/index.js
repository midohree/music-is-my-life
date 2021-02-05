import axios from 'axios';

const loadTopAlbums = async () => {
  try {
    const result = await axios.get('https://itunes.apple.com/us/rss/topalbums/limit=100/json');
    const albumList = result.data.feed.entry;

    return albumList;
  } catch (err) {
    console.error(err);
  }
};

export { loadTopAlbums };
