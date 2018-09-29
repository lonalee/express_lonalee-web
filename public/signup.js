

const providerBox = document.querySelector('ul.provider-box');
const mobileNum = document.querySelector('input.mobile-number');

document.querySelector('ion-icon.dropdown').addEventListener('click', () => {
  providerBox.style.display = 'block';
  providerBox.focus();
})
providerBox.addEventListener('click', () => {
  mobileNum.value = event.target.textContent; // 사용자 입력 발생
  event.currentTarget.style.display = 'none';
});
// 드롭다운을 클릭했다가 아무 것도 선택하지 않을 때 처리
providerBox.addEventListener('blur', () => {
  event.currentTarget.style.display = 'none';
});



//-----------참고--mouseout-----------//
    // document.querySelector('div.prov-box-container').addEventListener('mouseout', () => {
    //   // console.dir(event.target); // 실제 이벤트가 발생한 요소
    //   // console.dir(event.currentTarget); // currentTarget DOM에 바인딩된 요소를 가리킴
    //   event.target === event.currentTarget ? event.currentTarget.style.display = 'none' : ''; //꼼수
    // })

//email select box
document.querySelector('div.email-box-container').addEventListener('click', () => {
  displaySwtich('block');
  event.currentTarget.childNodes[6].focus();
})
document.querySelector('ul.email-domain-box').addEventListener('blur', () => {
  displaySwtich('none');
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

// year select box
document.querySelector('div.year').addEventListener('click', () => {
  displaySwtich('block');
  event.currentTarget.childNodes[6].focus();
  // blur 처리하기 위해서는 사전에 focused되어야 하는데, div, ul에는 focus를 줄 수 없어서 ul.year에 tabindex -1 처리함
  // -1은 키보드 접근은 안되도록 하기 위함 0도 처리 가능함.
})
document.querySelector('ul.year').addEventListener('blur', () => {
  displaySwtich('none');
})
// month select box
document.querySelector('div.month').addEventListener('click', () => {
  displaySwtich('block');
  event.currentTarget.childNodes[6].focus();
})
document.querySelector('ul.month').addEventListener('blur', () => {
  displaySwtich('none');
})
//day select box
document.querySelector('div.day').addEventListener('click', () => {
  displaySwtich('block');
  event.currentTarget.childNodes[6].focus();
})
document.querySelector('ul.day').addEventListener('blur', () => {
  displaySwtich('none');
})

// -------------------******* client side AJAX request --------------------
const person = {
  userId: String,
  password: String,
  mobile: String,
  email: String,
  birthday: String
}

document.querySelector('button').addEventListener('click', function () {
  const book = { title: 'it works', author: 'YOU', price: '500' };

  const xhr = new XMLHttpRequest();
  xhr.open('POST', '/books');
  xhr.setRequestHeader('Content-type', 'application/json');
  xhr.send(JSON.stringify(book));

  xhr.onreadystatechange = function () {
    if (xhr.readyState === XMLHttpRequest.DONE) {
      if (xhr.status === 200) {
        console.log(xhr.response)

      } else {
        console.log("Error!");
      }
    }
  };
});