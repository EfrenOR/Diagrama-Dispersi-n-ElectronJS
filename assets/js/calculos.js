


export default function calcular(){
    const $btnCalcular = document.getElementById('btn-calcular'),
          $inputX = document.getElementById('x'),
          $inputY = document.getElementById('y')

    document.addEventListener('click', e=>{
        if(e.target === $btnCalcular){

            const regex = /^[0-9]+(.[0-9]+)+([0-9]+)*$/gmi;
            if((regex).test(($inputX.value)) === false){
                $inputX.parentNode.classList.add('is-active')
                $inputX.previousElementSibling.classList.add('is-active')
            }
        }
    })
}