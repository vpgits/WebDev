const fontSizes = document.querySelectorAll('.font-sizes button');
const body = document.querySelector('body');

fontSizes.forEach(fontSize => {
    fontSize.addEventListener('click', () => {
        // Remove active class from all buttons
        fontSizes.forEach(button => button.classList.remove('active'));

        // Add active class to the clicked button
        fontSize.classList.add('active');

        // Change font size of body based on the clicked button's ID
        switch (fontSize.id) {
            case 'small':
                body.style.fontSize = '12px';
                break;
            case 'medium':
                body.style.fontSize = '14px';
                break;
            case 'large':
                body.style.fontSize = '16px';
                break;
            default:
                break;
        }
    });
});

   
