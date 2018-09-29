const signup = document.querySelector('a.signup');
console.log(signup);

// signup.ejs에 대한 get 요청 작성
// ajax request로 xhr open
document.querySelector('a.signup').addEventListener('click', () => {
  var xhr = new XMLHttpRequest();
  // xhr.open('GET', '/signup.ejs');
  xhr.open('GET', '/signup');
  xhr.send();

  //
  xhr.onreadystatechange = () => {
    if (xhr.readyState === XMLHttpRequest.DONE) {
      if (xhr.status === 200) {
        // document.querySelector('div#content-wrap').innerHTML = xhr.responseText;
        console.log(xhr.responseText);
      } else {
        console.log('[' + xhr.status + ']: ' + xhr.statusText);
      }
    }
  }
});
