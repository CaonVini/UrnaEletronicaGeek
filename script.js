//  Variáveis // 
let numero = document.querySelector('.numero');

let digito1 = document.querySelector('.digito1');
let digito2 = document.querySelector('.digito2');

let telainicial = document.querySelector('.telainicial');
let cliquebranco = document.querySelector('.cliquebranco');
let cliqueconfirma = document.querySelector('.cliqueconfirma');
let invalido = document.querySelector('.invalido');

let diginvalido = document.querySelector('.digito-invalido');

let candidatos = document.querySelector('.candidato');

let votoBranco = false;
let votoInvalido = false;
let fim = false;

let beep = new Audio('sounds/beep.mp3')
let music = new Audio('sounds/votacao-finalizada.mp3')

digito1.style.animation = '';
digito2.style.animation = 'none';

let candidato1 = `
        <div class="num-candidato">
            <span>SEU VOTO PARA</span>
            <P style="text-align: center;"><strong>PRESIDENTE</strong></P><br>
            <input type="text" name="digitado" value="1" class="digitado1" maxlength="1" readonly>
            <input type="text" name="digitado" value="7" class="digitado2" maxlength="1" readonly>
        </div>
        <div class="text-candidato">
            <p><strong>Nome</strong>: Hommer</p>
            <P><strong>Partido</strong>: HB</P>
            <p><strong>Slogan</strong>: <i>"Slogan da campanha"</i></p>
            <p><strong>Vice-presidente</strong>: Bart </p>
        </div>
        <div>
            <img class="foto-candidato" src="images/presidentes/homer.png" alt="">
            <img class="foto-vice" src="images/vices/bart.jpg" alt="">
        </div>
    </div>
    <div class="info-Text">
        <hr>
        <p>
            Aperte a tecla
            <br>
            <strong>VERDE</strong> para CONFIRMAR este voto
            <br>
            <strong>LARANJA</strong> para REINICIAR este voto
        </p>
    </div>
`

let candidato2 = `
            <div class="num-candidato">
                <span>SEU VOTO PARA</span>
                <P style="text-align: center;"><strong>PRESIDENTE</strong></P><br>
                <input type="text" name="digitado" value="1" class="digitado1" maxlength="1" readonly>
                <input type="text" name="digitado" value="8" class="digitado2" maxlength="1" readonly>
            </div>
            <div class="text-candidato">
                <p><strong>Nome</strong>: Marge</p>
                <P><strong>Partido</strong>: ML</P>
                <p><strong>Slogan</strong>: <i>"Slogan da campanha"</i></p>
                <p><strong>Vice-presidente</strong>: Lisa </p>
            </div>
            <div>
                <img class="foto-candidato" src="images/presidentes/marge.png" alt="">
                <img class="foto-vice" src="images/vices/lisa.jpg" alt="">
            </div>
        </div>
        <div class="info-Text">
            <hr>
            <p>
                Aperte a tecla
                <br>
                <strong>VERDE</strong> para CONFIRMAR este voto
                <br>
                <strong>LARANJA</strong> para REINICIAR este voto
            </p>
        </div>
`

let candidato3 = `
            <div class="num-candidato">
                <span>SEU VOTO PARA</span>
                <P style="text-align: center;"><strong>PRESIDENTE</strong></P><br>
                <input type="text" name="digitado" value="1" class="digitado1" maxlength="1" readonly>
                <input type="text" name="digitado" value="9" class="digitado2" maxlength="1" readonly>
            </div>
            <div class="text-candidato">
                <p><strong>Nome</strong>: Ned Flanders </p>
                <P><strong>Partido</strong>: NFB </P>
                <p><strong>Slogan</strong>: <i>"Slogan da campanha"</i></p>
                <p><strong>Vice-presidente</strong>: Herb </p>
            </div>
            <div>
                <img class="foto-candidato" src="images/presidentes/marge.png" alt="">
                <img class="foto-vice" src="images/vices/lisa.jpg" alt="">
            </div>
        </div>
        <div class="info-Text">
            <hr>
            <p>
                Aperte a tecla
                <br>
                <strong>VERDE</strong> para CONFIRMAR este voto
                <br>
                <strong>LARANJA</strong> para REINICIAR este voto
            </p>
        </div>
`

// Funções dos Botões //

function digitar(numero) {
    beep.play();

    if(fim === false && votoBranco === false)
     {
        if(digito1.value == '' && digito2.value == '')
         {
            digito1.value = numero;
            digito1.style.animation = 'none';
            digito2.style.animaton = '';
        } 
        else if (digito1.value != '' && digito2.value == '') 
        {
            digito2.value = numero;
            digito2.style.animation = 'none';
        }
    }
}

// Corrigir //

function corrige() {
    beep.play();

    if(fim === false)
    {
        cliquebranco.classList.add('sumir');
        invalido.classList.add('sumir');
        candidatos.classList.add('sumir');
        telanicial.classList.remove('sumir');
        digito1.value = '';
        digito2.value = '';
        votoBranco = false;
        votoInvalido = false;
    }
}

// Voto em Branco //

function branco() {
    beep.play();

    if(fim === false)
    {
        if(digito1.value == '' && digito2.value == '')
        {
            votoBranco = true;
            telainicial.classList.add('sumir');
            cliquebranco.classList.remove('sumir');
        }
    }
}

const loop = setInterval(() => {

    if(digito1.value == "1" && digito2.value == "7")
    {
        telainicial.classList.add('sumir');
        candidatos.classList.remove('sumir');
        candidatos.innerHTML = candidato1;
    }
    
    else if(digito1.value == "1" && digito2.value == "8")
    {
        telainicial.classList.add('sumir');
        candidatos.classList.remove('sumir');
        candidatos.innerHTML = candidato1;
    }

    else if(digito1.value == "1" && digito2.value == "9")
    {
        telainicial.classList.add('sumir');
        candidatos.classList.remove('sumir');
        candidatos.innerHTML = candidato1;
    }

    else{
        if(digito1.value != '' && digito2.value != '')
        {
            votoInvalido = true;
            telainicial.classList.add('sumir');
            invalido.classList.remove('sumir');
            diginvalido.innerHTML = `Você digitou:<strong>${digito1.value}${digito2.value}</strong>`;

        }else if (digito1.value == "" && digito2.value == ""){
            digito1.styçe.animation = '';
        }
    }

}, 10);
