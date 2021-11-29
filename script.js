import Countdown from './countdown.js';

const botaoVerificar = document.querySelector('.informar');
botaoVerificar.addEventListener('click', handleClick);

let dayInformado = document.querySelector('#dia').value;
let monthInformado = document.querySelector('#mes').value;
let yearInformado = document.querySelector('#ano').value;
let tempoParaONatal = '';

function handleClick(e) {
  limpaCronometragem();
  dayInformado = document.querySelector('#dia').value;
  monthInformado = document.querySelector('#mes').value;
  yearInformado = document.querySelector('#ano').value;

  tempoParaONatal = new Countdown(`${dayInformado} ${monthInformado} ${yearInformado} GMT-0300`);
  const tempoParaOAnoNovo = new Countdown('25 december 2021 GMT-0300');

  const day = document.querySelector('.day');
  const hours = document.querySelector('.hours');
  const minutes = document.querySelector('.minutes');
  const seconds = document.querySelector('.seconds');

  console.log(tempoParaOAnoNovo.total);

  setInterval(() => {
    day.innerText = `${tempoParaONatal.total.days}:`;
    hours.innerText = `${tempoParaONatal.total.hours}:`;
    minutes.innerText = `${tempoParaONatal.total.minutes}:`;
    seconds.innerText = `${tempoParaONatal.total.seconds}`;
  }, 1000)
}

function limpaCronometragem() {
  dayInformado = '';
  monthInformado = '';
  yearInformado = '';
  tempoParaONatal = '';
}

