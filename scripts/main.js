function Login() {
  var xhr = new XMLHttpRequest();
  xhr.open('GET', 'https://rfailesdev-babuin-v3-server-main-tmcg33.streamlit.app/login?secret_key=123321');
  xhr.onload = function () {
    var responseText = xhr.responseText;
    alert(responseText);
    window.location.href = 'main.html';
  };
  xhr.onerror = function () {
    alert('There was an error!');
  };
  xhr.send();
};