//create an infiniteContent function 

// find the section with the ID of element
const $element = document.querySelector('#element')


const infininteContent = ()=> {

    if ($element.getBoundingClientRect().top < window.innerHeight) {


        const $createHeading = document.createElement('H2');

        $createHeading.textContent = 'More content coming soon!';
        
        $element.appendChild($createHeading);
    }


}
