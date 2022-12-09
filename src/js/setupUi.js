const loggedinRefs = document.querySelectorAll('.logged-in');
const loggedoutRefs = document.querySelectorAll('.logged-out');
const accountRef = document.querySelector('.account-details');

export function setupUI(user){ 
    if (user) {
        //show account info
        const html = `
        <p> Logged in as ${user.email}</p>
        `
        accountRef.innerHTML = html;
        //toggel UI eleemnts
        loggedinRefs.forEach(item => item.style.display = 'block');
        loggedoutRefs.forEach(item => item.style.display = 'none');
    } else { 
        //hide account info
        accountRef.innerHTML = '';
        //toggel UI eleemnts
        loggedinRefs.forEach(item => item.style.display = 'none');
        loggedoutRefs.forEach(item => item.style.display = 'block');
    }
}