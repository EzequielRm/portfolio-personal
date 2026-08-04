document.addEventListener('DOMContentLoaded', function () {
  const contactForm = document.getElementById('contact-form');
  if (!contactForm) return;

  contactForm.addEventListener('submit', function (event) {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const phone = form.phone.value.trim();
    const message = form.message.value.trim();

    const submitBtn = form.querySelector('.formulariosubmit');
    const btnText = submitBtn ? submitBtn.querySelector('.btn-text') : null;
    const btnStatus = submitBtn ? submitBtn.querySelector('.btn-status') : null;

    if (!name || !email || !message) {
      if (btnStatus) {
        btnStatus.textContent = 'Por favor completa nombre, correo y mensaje.';
        btnStatus.classList.add('error');
      } else {
        alert('Por favor completa nombre, correo y mensaje.');
      }
      return;
    }

    if (btnStatus) {
      btnStatus.textContent = 'Mensaje enviado. Abriendo tu cliente de correo...';
      btnStatus.classList.remove('error');
    }

    const subject = encodeURIComponent('Contacto desde el formulario');
    const body = encodeURIComponent(
      `Nombre: ${name}\nCorreo: ${email}\nTeléfono: ${phone}\n\nMensaje:\n${message}`
    );

    fetch('http://127.0.0.1:5000/contacto', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email, phone, message })
    })
    .then(res => res.json())
    .then(data => {
      if(btnStatus) {
        btnStatus.textContent = '✅ ' + data.mensaje;
        btnStatus.style.color = 'green';
      }
      form.reset();
    })
    .catch(err => {
      if(btnStatus) {
        btnStatus.textContent = '❌ Error al enviar';
        btnStatus.style.color = 'red';
      }
    });



    // revertir estado después de un tiempo para permitir reenvío
    setTimeout(function () {
      if (btnText) btnText.textContent = 'Enviar';
      if (submitBtn) submitBtn.disabled = false;
      if (btnStatus) btnStatus.textContent = '';
    }, 8000);
  });

  window.addEventListener('pageshow', function (event) {
    if (event.persisted || window.performance?.getEntriesByType('navigation')[0]?.type === 'back_forward') {
      const form = document.getElementById('contact-form');
      if (form) form.reset();
    }
  });
});
