const form = document.querySelector('form');

// Verison 1
// const userNameInput = form.querySelector("input[data-name='text']");
// const passwordInput =form.querySelector("input[data-name='password']");
// const confirmPasswordInput = form.querySelector("input[data-name='confirm-password']");

// Verison 2
//const inputs = form.querySelectorAll('input');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    // Verison 1
    // const username = userNameInput.value;
    // const password = passwordInput.value;
    // const confirm = confirmPasswordInput.value;
    //console.log(username, password, confirm);
    // Verison 2
    // const bodyData = {};
    // for (const input of inputs ) {
    //     console.log(input.getAttribute('data-name'), input.value);
    //     bodyData[input.getAttribute('data-name')] = input.value
    // }

    // fetch('https://jsonplaceholder.typicode.com/users', {
    //     method: 'POST',
    //     body: JSON.stringify(bodyData)
    // })

    const formData = new FormData(form);
    console.log(formData);

    formData.delete('confirm-password');
    formData.append('created-at', Date.now());
    fetch('https://jsonplaceholder.typicode.com/users', {
    method: 'POST',
    body: formData
    });
})