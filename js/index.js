//create an infiniteContent function 

// find the section with the ID of element
const $element = document.querySelector('#element')


const infininteContent = ()=> {

    if ($element.getBoundingClientRect().top < window.innerHeight) {


        const $createHeading = document.createElement('H2');

        $createHeading.textContent = 'More content coming soon!';

        $element.appendChild($createHeading);
    

		
		const $createParagraph = document.createElement('p');

		
		$createParagraph.textContent = 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequuntur, quos impedit fugit velit magni quidem, qui molestiae, aliquam sequi nobis repellat null doloremque';

		
		$element.appendChild($createParagraph);
}
}

window.addEventListener('scroll', infininteContent)