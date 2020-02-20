// function checkNotEmpty() {
//     let validInput = {};
//     let errors = document.getElementById('errorsContainer');
//
//     forms.forEach(function(input){
//         if (input.type == 'radio') {
//             if (input.value !== 0 || input.value!== 1) {
//                 errors.textContent += '* --> All the radio buttons must be checked.'
//             }
//         }
//     })
// }

function lockForm() {
    theForm.addEventListener('submit', function (e) {

        e.preventDefault();

        let validInput = {};
        let errors = document.getElementById('errorsContainer');

        forms.forEach(function(input){
            if (input.classList === '.radio1' || input.classList === '.radio2') {
                if (input.type == 'radio' && input.checked == false) {
                    errors.textContent += '* --> All the radio buttons must be checked.'
                }
            }
        })
    })
}
