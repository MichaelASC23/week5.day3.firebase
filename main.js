const database = firebase.database().ref();

const allMessageDiv = document.getElementById("all-message");
const urlInput = document.getElementById("url");
const sendButton = document.getElementById("send-btn");
sendButton.onclick = updateDB;

function updateDB(event){
    event.preventDefault();

    const url = urlInput.value;
    
    const urlData = {
        URL: url
    }
    console.log(urlData);

    database.push(urlData);

    urlInput.value = "";
}

database.on("child_added", addImage);


function addImage(rowData) {
    const row = rowData.val();

    const imageUrl = row.URL
    
    console.log("Url: ", imageUrl);

    const urlDiv = makeSingleMessageHTML(imageUrl);

    allMessageDiv.appendChild(urlDiv)
}

function makeSingleMessageHTML(imgTxt){
    const parentDiv = document.createElement("div");

    const urlimages = document.createElement("img");

    urlimages.src = imgTxt;

    parentDiv.appendChild(urlimages);

    return parentDiv;
}