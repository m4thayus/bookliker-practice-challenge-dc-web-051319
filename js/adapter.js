class Adapter {
    static fetch(url) {
        return fetch(url)
            .then(response => response.json())
            .then(obj => {
                return obj;
            });
    }

    static update(url, id, data) {
        let configObject = {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(data)
        };
        
        return fetch(`${url}/${id}`, configObject)
            .then(response => response.json())
            .then(object => {
                window.alert(`Success!`);
                return object;
            })
            .catch(error => {
                window.alert(error.message);
            });
    }
}