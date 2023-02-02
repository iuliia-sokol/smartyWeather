const PLACES_TOKEN = process.env.REACT_APP_MAP_API_KEY;

// const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
const proxy = 'https://api.allorigins.win/get?url=';

export const getImage = async id => {
  const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${id}&key=${PLACES_TOKEN}`;
  try {
    const response = await fetch(`${proxy}${encodeURIComponent(`${url}`)}`);
    const result = await response.json();
    const data = JSON.parse(result.contents);
    const photoRef = data.result.photos[0].photo_reference;

    let imageSrc;
    if (photoRef) {
      const imageLookupURL = `https://maps.googleapis.com/maps/api/place/photo?photoreference=${photoRef}&photo_reference=${photoRef}&key=${PLACES_TOKEN}&maxwidth=2400&maxheight=1200`;

      const imageURLQuery = await fetch(
        `${proxy}${encodeURIComponent(`${imageLookupURL}`)}`
      );

      const res = await imageURLQuery.json();
      imageSrc = res.status.url;
    }
    return imageSrc;
  } catch (error) {
    console.log(error);
  }
};