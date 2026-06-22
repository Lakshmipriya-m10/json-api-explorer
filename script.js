
const fetchButton = document.getElementById("fetchButton");
const submitPost = document.getElementById("postForm")
const successPost = document.getElementById("formSuccess")

submitPost.addEventListener("submit", function (event) {
    event.preventDefault();
    console.log(event);
    const elements = event.target.elements;
    const title = elements.title.value;
    const body = elements.body.value;
    console.log(title, body);
    const jsonObj = {
        "title": title,
        "body": body
    }
    fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
            },
        body: JSON.stringify(jsonObj)
        })
        .then(function (response) {
            return response.json();
        })
        .then(function (data){
            console.log(data);
            alert(`Post submitted Successfully!
                ${data.title}
                ${data.body}`);
        })
    
})

fetchButton.addEventListener("click", function () {
   // Make the GET request   


fetch("https://jsonplaceholder.typicode.com/posts")
       .then(function (response) {
           // Convert the response to JSON
           return response.json();
        })
       .then(function (json) {
        //    console.log(json); // Log the JSON data
           const div = document.getElementById("postList");

           for(let user of json) {
            const postContainer = document.createElement("div")
            postContainer.innerHTML = 
                `
                <p>Title: ${user.title}</p>
                <p>Message: ${user.body}</p>
                <br>
                `;
            div.appendChild(postContainer);
           }
            ;
        })

       .catch(function (error) {
           console.error("Error fetching the data:", error);
       });

});