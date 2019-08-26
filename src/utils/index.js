const Storage = {
    set: function (key, value) {
        let curTime = new Date().getTime();
        localStorage.setItem(key, JSON.stringify({ data: value, time: curTime }));
    },
    get: function (key) {
        let data = localStorage.getItem(key);
        let dataObj = JSON.parse(data);
        if (data != null) {
            return dataObj.data;
        } else {
            return null;
        }
    },
    remove: function (key) {
        if (localStorage.getItem(key)) {
            localStorage.removeItem(key)
        }
    }
};

export {
    Storage,
}
export default {}