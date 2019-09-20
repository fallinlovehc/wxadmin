const Storage = {
    set: function (key, value) {
        let curTime = new Date().getTime();
        sessionStorage.setItem(key, JSON.stringify({ data: value, time: curTime }));
    },
    get: function (key) {
        let data = sessionStorage.getItem(key);
        let dataObj = JSON.parse(data);
        if (data != null) {
            return dataObj.data;
        } else {
            return null;
        }
    },
    remove: function (key) {
        if (sessionStorage.getItem(key)) {
            sessionStorage.removeItem(key)
        }
    }
};


let BASE_URL;  // api调用baseUrl

if (process.env.NODE_ENV === 'development') {

    BASE_URL = 'http://10.200.114.35:8001';

} else if (process.env.NODE_ENV === 'production') {
    // 生产环境
    BASE_URL = 'http://10.200.114.35:8001';
}

export {
    Storage, BASE_URL
}
export default {}