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

        //create a new img element
        const $createImage =document.createElement('img');
        
        //add an image to that img element
        $createImage.setAttribute('src','https://via.placeholder.com/1600x900');

        //create the img as a child of the $element section
        $element.appendChild($createImage)
}
}

window.addEventListener('scroll', infininteContent)