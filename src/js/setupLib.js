const libList = document.querySelector('.js-gallery-library');

export default function setupLib(data) {
    if (data.length) {
        let html = '';
        data.forEach(doc => {
            const guide = doc.data();
            console.log(guide);
            const li = `
            <li>
                <p>${guide.title}</p>
                <p>${guide.content}</p>
            </li>`
            html += li;
        });
        libList.innerHTML = html;
    } else {
        libList.innerHTML = '<h2 style ="text-align: center;">You have to log-in to view film gallery</h2>';
        
    }
}