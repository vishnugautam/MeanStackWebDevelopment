//select the elements
const submitBtn = document.getElementById("submit");
const email = document.getElementById("exampleInputEmail1");
const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const city = document.getElementById("inputCity");
const state = document.getElementById("inputState");
const blogContent = document.getElementById("blogContent");
var fullName = firstName.value + lastName.value;
const blog1 = document.getElementById("blog1");
const wrapper = document.getElementById('wrapper');

//a function to get the values and paste the values in the blog
// this method can be used without the <form> tag and it works 
function blogData(e) {
    e.preventDefault();
    var results = fullName + " " + email.value + " " + city.value + " " + state.value + " " + blogContent.value;
    console.log(results);
    blog1.innerHTML = results;
};
