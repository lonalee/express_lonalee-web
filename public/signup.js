

// const providerBox = document.querySelector('ul.provider-box');
// const mobileNum = document.querySelector('input.mobile-number');

// document.querySelector('ion-icon.dropdown').addEventListener('click', () => {
//   providerBox.style.display = 'block';
//   providerBox.focus();
// })
// providerBox.addEventListener('click', () => {
//   mobileNum.value = event.target.textContent; // 사용자 입력 발생
//   event.currentTarget.style.display = 'none';
// });
// // 드롭다운을 클릭했다가 아무 것도 선택하지 않을 때 처리
// providerBox.addEventListener('blur', () => {
//   event.currentTarget.style.display = 'none';
// });

//-----------참고--mouseout-----------//
    // document.querySelector('div.prov-box-container').addEventListener('mouseout', () => {
    //   // console.dir(event.target); // 실제 이벤트가 발생한 요소
    //   // console.dir(event.currentTarget); // currentTarget DOM에 바인딩된 요소를 가리킴
    //   event.target === event.currentTarget ? event.currentTarget.style.display = 'none' : ''; //꼼수
    // })

//email select box
document.querySelector('div.email-box-container').addEventListener('click', () => {
  console.log(event.currentTarget.childNodes[6]);
  event.currentTarget.childNodes[6].style.display = 'block';
  event.currentTarget.childNodes[6].focus();
})
document.querySelector('ul.email-domain-box').addEventListener('blur', () => {
  event.target.style.display = 'none';
})

//--------------------생년월일 innerHTML 함수
const birthRender = () => {
  const birth = {
    arrYear: [],
    arrMonth: [],
    arrDay: []
  };
  for (i = 0; i < 91; i++) {
    birth.arrYear[i] = i + 1910;
    if (i < 12) birth.arrMonth[i] = i + 1;
    if (i < 31) birth.arrDay[i] = i + 1;
  }
  birth.arrYear.forEach(n => {
    document.querySelector('ul.year').innerHTML += `
      <li>${n}</li>
    `
  });
  birth.arrMonth.forEach(n => {
    document.querySelector('ul.month').innerHTML += `
      <li>${n}</li>
    `
  });
  birth.arrDay.forEach(n => {
    document.querySelector('ul.day').innerHTML += `
      <li>${n}</li>
    `
  });
};
birthRender();

// -------------------******* client side AJAX request --------------------
const inputUser = document.querySelectorAll('input');
document.querySelector('button').addEventListener('click', () => {
  // const book = { title: 'it works', author: 'YOU', price: '500' };
  const user = {
    userId: String,
    password: String,
    email: String
  };

  for (let i = 0; i<12; i++) {
    console.log(inputUser[i].value);
  }

  // const xhr = new XMLHttpRequest();
  // xhr.open('POST', '/books');
  // xhr.setRequestHeader('Content-type', 'application/json');
  // xhr.send(JSON.stringify(book));

  // xhr.onreadystatechange = function () {
  //   if (xhr.readyState === XMLHttpRequest.DONE) {
  //     if (xhr.status === 200) {
  //       console.log(xhr.response)

  //     } else {
  //       console.log("Error!");
  //     }
  //   }
  // };
});