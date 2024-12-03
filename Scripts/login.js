/*-------------------------------Variables--------------------------------------*/
let users = [
{
    username: 'raj',
    password: 'raj'
},
{
    username: 'niranjan',
    password: 'niranjan'
}
];










/*-------------------------------Functions--------------------------------------*/
function check_user(username, password) {
    for (let i=0; i<users.length; i++) {
        if (users[i].username === username && users[i].password === password) {
            return true;
        }
    }
    return false;
};










/*-------------------------------Run--------------------------------------*/
document.querySelector('.js-submit-button').addEventListener('click', ()=>{
    let inputUsername = document.querySelector('.js-input-username');
    let inputPassword = document.querySelector('.js-input-password');
    let username = inputUsername.value;
    let password = inputPassword.value;

    if (check_user(username, password)) {
        alert('Successfull !!!');
    } else {
        alert('Unsuccessfull !!!');
    }

    inputUsername.value = '';
    inputPassword.value = '';
});