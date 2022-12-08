const loggedinRefs = document.querySelectorAll('.logged-in');
const loggedoutRefs = document.querySelectorAll('.logged-out');

export default function setupUI(user){ 
    if (user) {
        //toggel UI eleemnts
        loggedinRefs.forEach(item => item.style.display = 'block');
        loggedoutRefs.forEach(item => item.style.display = 'none');
    } else { 
        //toggel UI eleemnts
        loggedinRefs.forEach(item => item.style.display = 'none');
        loggedoutRefs.forEach(item => item.style.display = 'block');
    }
}