'use strict';
//1. submit button should get all the data's from the form
//2. data's should reflect on the blog area in a blog card
//3. edit button should allow the user to re-edit the blog


//select the elements
const submitBtn = document.getElementById("submit");
const email = document.getElementById("exampleInputEmail1");
const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const city = document.getElementById("inputCity");
const state = document.getElementById("inputState");
const blogContent = document.getElementById("blogContent");

//get data from the form
const formData = submitBtn.addEventListener('click', function () {
    const url = "main.html";
    fetch(url)
        .then((response) => {
            console.log(response);
            return response.json();
        })
        .then((data) => {
            let datas = data;

            datas.map(function (data) {
                const node = document.createElement('li');
                const textNode = document.createTextNode(`${FormData.blog}`);
                node.appendChild(textNode);
                console.log(node);
            })
        })
        .catch(function (error) {
            console.log(error);
        })
});
