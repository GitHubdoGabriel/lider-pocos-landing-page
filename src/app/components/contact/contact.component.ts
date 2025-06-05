import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

  enviarEmail(event: Event) {
    event.preventDefault();

    const form = event.target as HTMLFormElement;
    const name = (form.querySelector('#name') as HTMLInputElement)?.value;
    const email = (form.querySelector('#email') as HTMLInputElement)?.value;
    const phone = (form.querySelector('#phone') as HTMLInputElement)?.value;
    const message = (form.querySelector('#message') as HTMLTextAreaElement)?.value;

    const destinatario = 'atendimento@liderpocos.com.br';
    const assunto = encodeURIComponent('Solicitação de Orçamento Gratuito - Líder Poços');
    const corpo = encodeURIComponent(
      `Mensagem:\n${message} 
      \n\nNome: ${name}\nE-mail: ${email}\nTelefone: ${phone}`
    );

    window.location.href = `mailto:${destinatario}?subject=${assunto}&body=${corpo}`;
  }

  mascaraTelefone(event: Event) {
    const input = event.target as HTMLInputElement;
    let value = input.value.replace(/\D/g, '');

    if (value.length > 11) value = value.slice(0, 11);

    if (value.length > 10) {
      // Celular com 9 dígitos
      input.value = value.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
    } else if (value.length > 6) {
      input.value = value.replace(/(\d{2})(\d{4})(\d{0,4})/, '($1) $2-$3');
    } else if (value.length > 2) {
      input.value = value.replace(/(\d{2})(\d{0,5})/, '($1) $2');
    } else {
      input.value = value.replace(/(\d*)/, '($1');
    }
  }
}
