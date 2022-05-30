// 변수 명이 겹칠 수도 있음
// 따로 지역변수(변수의 범위)로 만들어주기 => 다른 곳에서 같은 함수 명을 써도 상관없음

// 함수 명 충돌할 수 있음 -> 함수 명 없이 호출
(function(){
    const bu_add = document.querySelector('.add_col')
const bu_re = document.querySelector('.remove_col')
const con_add = document.querySelector('.con')
// bu_add.addEventListener('click', () => {
//     con_add.classList.add('change')
// })
// bu_re.addEventListener('click', () => {
//     con_add.classList.add('remove')
// })
const handleClick = () => {
    con_add.classList.add('change')
}
const handlere = () => {
    con_add.classList.remove('change')
}
bu_add.addEventListener('click', handleClick)
bu_re.addEventListener('click', handlere)
// => popup or 모달창
})()
// 바인딩처리
// ()() -> (function(){})()