import axios from 'axios';

const SearchImages = async(term)=> {
  const response= await axios.get('https://api.unsplash.com/search/photos', {
        headers:{
            Authorization: 'Client-ID PcfiUo2Rc5gunmnAS_d7QeKrfoJg3QZSVJSoiJXIG4I',
        },
        params: {
            query:term,

        },
    });
   
    return response.data.results;
};

export default SearchImages;