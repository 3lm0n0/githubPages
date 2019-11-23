function myfunction() {
    document.querySelector('body').innerHTML = `
    <h1> This is an experiment </h1>
    <img src='img/img.gif' alt='image'>
    `;
}
window.addEventListener('load', myfunction());
