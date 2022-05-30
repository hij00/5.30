(function(){
            // const boxEl_1 = document.querySelector('.box')
            // const boxEl_2 = document.querySelector('.box_wrap:nth-child(2)')
            // const boxEl_3 = document.querySelector('.box_wrap:nth-child(3)')
            // const boxEl =document.querySelectorAll('.box')
            // console.log(boxEl[0])
            // const colAdd = () => {
            //     boxEl.classList.toggle('change')
            // }
            // boxEl[0].addEventListener('click', colAdd)
            // boxEl_2.addEventListener('click', colAdd)
            // boxEl_3.addEventListener('click', colAdd)

            // boxEl_1.addEventListener('click', () => {
            //     boxEl_1.classList.add('change')
            // })
            // boxEl_1.addEventListener('click', () => {
            //     boxEl_1.classList.remove('change')
            // })
            // boxEl_2.addEventListener('click', () => {
            //     boxEl_2.classList.add('change')
            // })
            // boxEl_3.addEventListener('click', () => {
            //     boxEl_3.classList.add('change')
            // })

            // 방법1 클래스 이름 추가
            // const boxEl_1 = document.querySelector('.box1')
            // const boxEl_2 = document.querySelector('.box2')
            // const boxEl_3 = document.querySelector('.box3')

            // boxEl_1.addEventListener('click', () => {
            //     boxEl_1.classList.toggle('change')
            // })
            // boxEl_2.addEventListener('click', () => {
            //     boxEl_2.classList.toggle('change')
            // })
            // boxEl_3.addEventListener('click', () => {
            //     boxEl_3.classList.toggle('change')
            // })
            // ========================
            // 방법2 중괄호 삭제
            // const boxEl_1 = document.querySelector('.box1')
            // const boxEl_2 = document.querySelector('.box2')
            // const boxEl_3 = document.querySelector('.box3')

            // boxEl_1.addEventListener('click', () => boxEl_1.classList.toggle('change'))
            // boxEl_2.addEventListener('click', () => boxEl_2.classList.toggle('change'))
            // boxEl_3.addEventListener('click', () => boxEl_3.classList.toggle('change'))
            // ==========================
            // 방법3 쿼리셀렉터올 => 변수로 하나씩 지정 할 필요 없음
            //                   => 배열로 하나씩 가져올 수 있음(0부터 시작) 
            const boxAll = document.querySelectorAll('.box')
            // boxAll[0].addEventListener('click', () => boxAll[0].classList.toggle('change'))
            // boxAll[1].addEventListener('click', () => boxAll[1].classList.toggle('change'))
            // boxAll[2].addEventListener('click', () => boxAll[2].classList.toggle('change'))
            // ========================
            // 방법4 포문을 이용해서 개선하기(힌트 : 똑같은 모양이 반복됨)
            for(let i = 0; i < boxAll.length; i++){
                boxAll[i].addEventListener('click', () => boxAll[i].classList.toggle('change'))
            }
        })()