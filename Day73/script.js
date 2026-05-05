function createCard(title, name, views, monthsOld, duration, thumbnail) {
    const container = document.getElementById("videoContainer");
    let viewstr 
    if(views<1000){
        viewStr=views;
    }
    else if(views<1000000){
        viewStr=views/1000 + "K";
    }
    else{
        viewStr=views/1000000 + "M";
    }
    const cardHTML = `<div class="card">
            <div class="box1">
                <div class="thumbnail"><img src="${thumbnail}"alt="Thumbnail Image"></div>
                <div class="duration">${duration}</div>
            </div>
            <div class="box2" >
                <div class="title">${title}</div>
                    <p>${name} . ${viewStr} views . ${monthsOld} months ago</p>
            </div>
        </div>`;
    container.insertAdjacentHTML("beforeend", cardHTML);
}

createCard("Introduction to Express Js | Sigma Web development Video #1", "CodeWithHarry", "5600000", 7, "32:24", "https://i.ytimg.com/vi/mCx5aSEK8YE/hqdefault.jpg?sqp=-oaymwEnCPYBEIoBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLBLt3Z6-Sw3YAMHxMLsTpLyePV35Q");


createCard("Introduction to Express Js | Sigma Web development Video #2", "CodeWithHarry", "780000", 6, "18:44", "https://i.ytimg.com/vi/mCx5aSEK8YE/hqdefault.jpg?sqp=-oaymwEnCPYBEIoBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLBLt3Z6-Sw3YAMHxMLsTpLyePV35Q");


createCard("Introduction to Express Js | Sigma Web development Video #3", "CodeWithHarry", "180000", 5, "12:28", "https://i.ytimg.com/vi/mCx5aSEK8YE/hqdefault.jpg?sqp=-oaymwEnCPYBEIoBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLBLt3Z6-Sw3YAMHxMLsTpLyePV35Q");


createCard("Introduction to Express Js | Sigma Web development Video #4", "CodeWithHarry", "184000", 5, "16:48", "https://i.ytimg.com/vi/mCx5aSEK8YE/hqdefault.jpg?sqp=-oaymwEnCPYBEIoBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLBLt3Z6-Sw3YAMHxMLsTpLyePV35Q");


createCard("Introduction to Express Js | Sigma Web development Video #5", "CodeWithHarry", "548000", 4, "22:24", "https://i.ytimg.com/vi/mCx5aSEK8YE/hqdefault.jpg?sqp=-oaymwEnCPYBEIoBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLBLt3Z6-Sw3YAMHxMLsTpLyePV35Q");


createCard("Introduction to Express Js | Sigma Web development Video #6", "CodeWithHarry", "76000", 3, "18:44", "https://i.ytimg.com/vi/mCx5aSEK8YE/hqdefault.jpg?sqp=-oaymwEnCPYBEIoBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLBLt3Z6-Sw3YAMHxMLsTpLyePV35Q");


createCard("Introduction to Express Js | Sigma Web development Video #7", "CodeWithHarry", "18000", 2, "12:28", "https://i.ytimg.com/vi/mCx5aSEK8YE/hqdefault.jpg?sqp=-oaymwEnCPYBEIoBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLBLt3Z6-Sw3YAMHxMLsTpLyePV35Q");


createCard("Introduction to Express Js | Sigma Web development Video #8", "CodeWithHarry", "480000", 2, "14:28", "https://i.ytimg.com/vi/mCx5aSEK8YE/hqdefault.jpg?sqp=-oaymwEnCPYBEIoBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLBLt3Z6-Sw3YAMHxMLsTpLyePV35Q");