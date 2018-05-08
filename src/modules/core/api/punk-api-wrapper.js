import PropTypes from 'prop-types';

const apiURL = 'https://api.punkapi.com/v2';
const headers = {
  Accept: 'application/json',
};

class PunkAPIWrapper {
  static getBeer = id =>
    fetch(`${apiURL}/beers/${id}`, { headers: { ...headers } }).then(res =>
      res.json().then((jsonArray) => {
        if (jsonArray instanceof Array && jsonArray.length > 0) {
          return jsonArray[0];
        }
        return jsonArray;
      }));

  static getBeersByPage = (numberOfBeersPerPage = 10, pageNumber = 1, searchByName = null) =>
    fetch(
      `${apiURL}/beers?page=${pageNumber}&per_page=${numberOfBeersPerPage}${
        searchByName ? `&beer_name=${searchByName.replace(new RegExp(' ', 'g'), '_')}` : ''
      }`,
      {
        headers: { ...headers },
      },
    ).then(res => res.json());

  static beerShape = () => ({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    tagline: PropTypes.string.isRequired,
    first_brewed: PropTypes.string.isRequired,
    description: PropTypes.string,
    image_url: PropTypes.string,
    abv: PropTypes.number,
    ibu: PropTypes.number,
    target_fg: PropTypes.number,
    target_og: PropTypes.number,
    ebc: PropTypes.number,
    srm: PropTypes.number,
    ph: PropTypes.number,
    attenuation_level: PropTypes.number,
    volume: PropTypes.shape({
      value: PropTypes.number,
      unit: PropTypes.string,
    }),
    boil_volume: PropTypes.shape({
      value: PropTypes.number,
      unit: PropTypes.string,
    }),
    method: PropTypes.shape({
      mash_temp: PropTypes.arrayOf(PropTypes.shape({
        temp: PropTypes.shape({
          value: PropTypes.number,
          unit: PropTypes.string,
        }),
        duration: PropTypes.number,
      })),
      fermentation: PropTypes.shape({
        temp: PropTypes.shape({
          value: PropTypes.number,
          unit: PropTypes.string,
        }),
      }),
      twist: PropTypes.any,
    }),
    ingredients: {
      malt: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string,
        amount: PropTypes.shape({
          value: PropTypes.number,
          unit: PropTypes.string,
        }),
      })),
      hops: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string,
        amount: PropTypes.shape({
          value: PropTypes.number,
          unit: PropTypes.string,
        }),
        add: PropTypes.string,
        attribute: PropTypes.string,
      })),
      yeast: PropTypes.string,
    },
    food_pairing: PropTypes.arrayOf(PropTypes.string),
    brewers_tips: PropTypes.string,
    contributed_by: PropTypes.string,
  });
}

export default PunkAPIWrapper;
