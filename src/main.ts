import {CPF } from './cpf';

const input: HTMLInputElement = document.querySelector('.cpf') as HTMLInputElement;
const button: HTMLButtonElement = document.querySelector('.enviar') as HTMLButtonElement;
const label: HTMLLabelElement = document.querySelector('.regiao') as HTMLLabelElement;

const sendCPF = () => {
  label.style.display = 'block';
  try {
    const cpf = new CPF(input.value);
    showText("A região ou as regiões em que foi ou foram emitido(s) o(s) CPF(s) é ou são: " + cpf.getCPFRegion());
  } catch (error) {
    showText((error as Error).message);
    label.classList.add('error');
  }
}


const showText = (texto: string) => {
  label.classList.remove('error');
  label.innerText = texto;
}

input.onkeydown = (ev: KeyboardEvent) => {
  if(ev.key === 'Enter'){
    sendCPF();
  }}
button.onclick = sendCPF;