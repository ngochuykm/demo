export default function callApi(payload) {
    console.log("payload o fetch", payload)
    return new Promise((resolve, reject) => {
        const url = 'http://localhost:3001/items';
        fetch(url, {
            method: 'POST',
            headers:{"Content-type":"application/json"},
            body: JSON.stringify({ name: payload })
        })

            .then((response) => response.json())
            .then((res) => {
                resolve(res);
            })
            .catch((error) => {
                reject(error);
            });
    })
}