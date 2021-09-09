import axios from "axios"

axios.defaults.baseURL = "http://127.0.0.1:8080"
export function request (method, url, data) {
    return new Promise((resolve, reject) => {
        switch (method) {
            case "get":
                axios.get(url).then(response => {
                    if(response.data.code === 200) {
                        resolve(response.data.data)
                    } else {
                        reject(response.data)
                    }
                })
                break
            case "post":
                axios.post(url, data).then(response => {
                    if(response.data.code === 200) {
                        resolve(response.data.date)
                    } else {
                        reject(response.data)
                    }
                })
                break
            case "delete":
                axios.delete(url).then(response => {
                    if(response.data.code === 200) {
                        resolve(response.data.data)
                    } else {
                        reject(response.data)
                    }
                })
        }
    })
}

