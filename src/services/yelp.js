import axios from 'axios'

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer rTsg3acszwg1gDNO8HUe1EN2JXutHrqWhPWPq6yJ6umqMjvnpjYGgzmeKV_90DEbWoSBPJSCVkoJT5Zc5JZLogY4a2jaxReb1z6egZM2jbs2M-W4_oE2we7abDhBX3Yx'
    }
})