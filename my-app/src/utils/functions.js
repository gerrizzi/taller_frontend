export default {
    FetchPost(url, data, callBackSuccess, callBackError = null, headers = null) {
        fetch(url, {
            method: "POST",
            headers: CreateFetchHeaders(headers),
            body: JSON.stringify(data)
        })
            .then(res => { return res.json(); })
            .then(json => callBackSuccess(json))
            .catch(err => {
                if (callBackSuccess != null) callBackSuccess(err);
                else console.log("Error: ", err)
            });
    },

    FetchGet(url, callBackSuccess, callBackError = null, headers = null) {
        fetch(url, {
            method: "GET",
            headers: CreateFetchHeaders(headers)
        })
            .then(res => { return res.json(); })
            .then(json => callBackSuccess(json))
            .catch(err => {
                if (callBackSuccess != null) callBackSuccess(err);
                else console.log("Error: ", err)
            });
    },

    FetchDelete(url, callBackSuccess, callBackError = null, headers = null) {
        fetch(url, {
            method: "DELETE",
            headers: CreateFetchHeaders(headers)
        })
            .then(res => { return res.json(); })
            .then(json => callBackSuccess(json))
            .catch(err => {
                if (callBackSuccess != null) callBackSuccess(err);
                else console.log("Error: ", err)
            });
    },
    GroupBy(list, keyGetter) {
        const map = new Map();

        list.forEach((item) => {
             const key = keyGetter(item);
             const collection = map.get(key);
             if (!collection) {
                 map.set(key, [item]);
             } else {
                 collection.push(item);
             }
        });

        return map;
    },
    Sum(items, prop){
        return items.reduce( function(a, b){
            return a + b[prop];
        }, 0);
    }
};

function CreateFetchHeaders(headers){
    headers = headers ?? {};

    if(headers["Content-Type"] === undefined || headers["Content-Type"] == null)
        headers["Content-Type"] = "application/json";

    return headers;
}