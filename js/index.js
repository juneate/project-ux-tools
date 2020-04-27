
// Get all the headers from each section
var headers = document.querySelectorAll("h2");

// Get the element from each secation 
var element = document.getElementById("scrollsection");

// For each heading 
function myFunction() {
	headers.forEach(header => {
		const sticky = header.offsetTop;
// Check if Scroll position > sticky, if yes add fixed heading otherwise remove fixed heading
           if (window.pageYOffset > sticky){
            header.classList.add("sticky");
		} else {
			header.classList.remove("sticky");
		}
	})
}
window.addEventListener('scroll', myFunction)

