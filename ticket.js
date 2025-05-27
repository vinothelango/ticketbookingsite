const github = document.querySelector('#GitHub');
const username = document.querySelector('#username');{

const username =localStorage.getItem('username')
const github = localStorage.getItem('GitHub')
const username1=localStorage.getItem('username1')

document.getElementById('username').textContent=username;
document.getElementById('username1').textContent=username;
document.getElementById('GitHub').textContent=github;
}