function submit() {
    var gapi="https://chart.googleapis.com/chart?cht=qr&chs=";
    var image = document.getElementById('qr-code');
    var size = document.getElementById('qr-size').value;
    var text = document.getElementById('qr-text').value;

    if (text !== "") {
        image.src = gapi + size + `&chl=${text}`;
    } else {
        alert("Enter some text")
    }
}