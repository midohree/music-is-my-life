import axios from 'axios';

const loadTopAlbums = async () => {
  try {
    const result = await axios.get('https://itunes.apple.com/us/rss/topalbums/limit=100/json');
    const data = result.data.feed.entry;

    let albumList = [];

    data.forEach(el => {
      albumList.push({
        id: el.id.attributes['im:id'],
        photoUrl: el['im:image'][0].label,
        name: el['im:name'].label,
        rights: el.rights.label,
        title: el.title.label,
        artist: el['im:artist'].label,
        formatDate: el['im:releaseDate'].attributes.label,
        date: el['im:releaseDate'].label,
        category: el.category.attributes.term,
      });
    });

    return albumList;
  } catch (err) {
    console.error(err);
  }
};

export { loadTopAlbums };
