export function getClue(cb) {
    const xhr = new XMLHttpRequest();
    xhr.addEventListener('readystatechange', event => {
        console.log(XMLHttpRequest);
        if (xhr.readyState !== XMLHttpRequest.DONE) {
            return;
        }
        if (xhr.status < 200 || xhr.status >= 300) {
            cb(xhr.status);
        }
        const data = JSON.parse(xhr.responseText)
        //console.log(xhr.responseText);
        //console.log(data);
        cb(null, data);
    });
    xhr.open('GET', 'https://jservice.xyz/api/random-clue');
    xhr.send();
}
