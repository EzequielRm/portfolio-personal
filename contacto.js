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

    // mostrar estado en el botón, deshabilitar y limpiar campos
    if (btnText) btnText.textContent = 'Enviando...';
    if (submitBtn) submitBtn.disabled = true;
    form.reset();

    const mailtoLink = `mailto:ezequielramirez36923603@gmail.com?subject=${subject}&body=${body}`;
    window.location.href = mailtoLink;

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
