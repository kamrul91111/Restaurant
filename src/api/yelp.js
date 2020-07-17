import axios from 'axios';


export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 
            'Bearer xIe_nvEXXKuw6oEGS6k-ws4DI37Ft1nxyYq2UxnXgiZDLFrR4jvcaq-cfhSvvlYrrVTwBsSXqo0z-PTLthpExQmWZohP9EpSy1SREM9iYb_Xc1DpWdXQ23oKR5EDX3Yx' 
    }
});


