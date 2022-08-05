// 1. getting the form data
// selecting the elements
const wrapper = document.querySelector('.wrapper');
const form = wrapper.querySelectorAll('.form');
const submitInput = form[0].querySelector('input[type="submit"]');
const blog1 = document.querySelector(".blog1");
const title = document.querySelector('.title');
const myForm = document.getElementById('myForm');
const submitBtn = document.getElementById('submit');
const blogArea = document.getElementById('blogArea');
const placingArea = document.getElementById("placingArea");
const image = document.getElementById('image');
const usrImg = document.getElementById('formFileSm');
const fullBlog = document.getElementById('fullBlog');
const fullBlogTitle = document.getElementById('fullBlogTitle');
const viewBtn = document.querySelector('.view');
var i = 0;

function getDataForm() {
    //    e.preventDefault();
    var formData = new FormData(form[0]);
    // 2. posting the data in blog section 
    title.innerHTML = formData.get('blogTitleField');
    blog1.innerHTML = formData.get('blogContentField');
    //    image.src = usrImg.value;
    console.log(formData.get('blogTitleField'));

    // reading the image in our system and updating the blog src
    var fReader = new FileReader();
    fReader.readAsDataURL(usrImg.files[0]);
    fReader.onloadend = function (event) {
        image.src = event.target.result;
    }
}

//submitInput.addEventListener('submit', (event) => {
//    event.preventDefault();
//    var formData = new FormData(form[0]);
//    // 2. posting the data in blog section 
//    title.innerHTML = formData.get('blogTitleField');
//    blog1.innerHTML = formData.get('blogContentField');
//});
//

myForm.addEventListener("submit", function (event) {
    event.preventDefault();
});

// to create a blog area dynamically 
submitBtn.addEventListener('click', function () {
    if (title != "some") {
        // create a clone div element
        let cloneN = blogArea.cloneNode(true);
        cloneN.id = `blogArea${i}`;
        placingArea.appendChild(cloneN);
        i++;
    }
    //    const div1 = document.createElement(blogArea[0]);
    //    console.log(div1);

});

var input = document.getElementById("inputFile");

viewBtn.addEventListener('click', function () {
    fullBlog.innerHTML = title.value;
    fullBlogTitle.innerHTML = blog1.value;
});
