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
    }
};

function CreateFetchHeaders(headers){
    headers = headers ?? {};

    if(headers["Content-Type"] === undefined || headers["Content-Type"] == null)
        headers["Content-Type"] = "application/json";

    return headers;
}