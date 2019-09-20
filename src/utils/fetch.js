import { BASE_URL } from '@utils'
const Fetch = {
    get(url, data = {}, option = {}) {
        let query = '';
        for (let v of Object.keys(data)) {
            query = !query ? `?${v}=${data[v]}` : `${query}&${v}=${data[v]}`
        }
        return fetch(`${BASE_URL}${url}${query}`, {
            ...option,
        }).then(res => res.json())
    },

    post(url, data = {}, option = {}) {
        return fetch(`${BASE_URL}${url}`, {
            body: JSON.stringify(data), 
            headers:{
              "Content-Type": "application/json;charset=utf-8",
            },
            method: "POST",
            ...option,
        }).then(res => res.json())
    }
}

export {
    Fetch
}
export default {}