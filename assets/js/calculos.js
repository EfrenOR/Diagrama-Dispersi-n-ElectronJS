import {signalToValidation} from './validations_css.js'


const sumatoria = (data)=>{
    const DATA = (data.value).split(',');
    let sumatoria = 0;
    DATA.forEach((el)=>{
        sumatoria = sumatoria + parseFloat(el);
    });
    
    return sumatoria;
}

const sumatoriaXY = (dataX, dataY)=>{
    const DATAX = (dataX.value).split(',');
    const DATAY = (dataY.value).split(',');
    let sumatoria = 0;
    DATAX.forEach((x, count)=>{
        sumatoria = sumatoria + (parseFloat(x) * parseFloat(DATAY[count]));
    });
    
    return sumatoria;
}

const sumatoriaX2 = (dataX)=>{
    const DATAX = (dataX.value).split(',');
    let sumatoria = 0;
    DATAX.forEach((x, count)=>{
        sumatoria = sumatoria + Math.pow(parseFloat(x), 2);
    });
    
    return sumatoria;
}



export default function calcular(){
    const $btnCalcular = document.getElementById('btn-calcular'),
          $inputX = document.getElementById('x'),
          $inputY = document.getElementById('y'),
          $form = document.getElementById('form-action')

    let a, b, n;

    document.addEventListener('submit', e=>{
        e.preventDefault()

        if(e.target === $form){
            if(!signalToValidation){
                console.log(signalToValidation)
                $inputX.previousElementSibling.classList.add('is-active')
                $inputY.previousElementSibling.classList.add('is-active')
            }else{
                $inputX.previousElementSibling.classList.remove('is-active')
                $inputY.previousElementSibling.classList.remove('is-active')

                console.log(sumatoria($inputX));
                console.log(sumatoria($inputY));
                console.log(sumatoriaXY($inputX, $inputY));
                console.log(sumatoriaX2($inputX));

                n = (($inputX.value).split(',').length)

                b = ((n)*(sumatoriaXY($inputX, $inputY)) - (sumatoria($inputX))*(sumatoria($inputY))) / ((n)*(sumatoriaX2($inputX)) - Math.pow(sumatoria($inputX), 2))
                a = ((sumatoria($inputY)) - (b)*(sumatoria($inputX))) / (n)
                
                console.log(b, a)
            }
        }


    })
}