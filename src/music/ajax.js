export function get(url, callback) {
    const xhr = new XMLHttpRequest()
    xhr.open('GET', url)
    xhr.onreadystatechange = () => {
        if (xhr.readyState === 4) {
            if ((xhr.status >= 200 && xhr.status <= 300) || xhr.status == 304) {
                callback(JSON.parse(xhr.responseText))
            } else {
                throw new Error('request error')
            }
        }
    }
    xhr.send()
}

export function post(url, params, callback) {
    const xhr = new XMLHttpRequest()
    xhr.open('POST', url)
    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded')
    xhr.onreadystatechange = () => {
        if (xhr.readyState === 4) {
            if ((xhr.status >= 200 && xhr.status <= 300) || xhr.status == 304) {
                callback(JSON.parse(xhr.responseText))
            } else {
                throw new Error('request error')
            }
        }
    }
    xhr.send(JSON.stringify(params))
}

