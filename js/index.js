//create an infiniteContent function 

// find the section with the ID of element
const $element = document.querySelector('#element')


const infininteContent = ()=> {

    if ($element.getBoundingClientRect().top < window.innerHeight) {

        //create an H2 heading
        const $createHeading = document.createElement('H2');

        //Add text to the H2 heading
        $createHeading.textContent = 'More content coming soon!';

        //create the h2 as a child of the $element section
        $element.appendChild($createHeading);
    

		//create a new paragraph
		const $createParagraph = document.createElement('p');

		//add text to the paragraph
		$createParagraph.textContent = 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequuntur, quos impedit fugit velit magni quidem, qui molestiae, aliquam sequi nobis repellat null doloremque';

		//create the paragraph as a child of the $element section
        $element.appendChild($createParagraph);
        

}
}

window.addEventListener('scroll', infininteContent)