// Progressive enhancement: the visible address and mail link work without JS.
const copyButton = document.querySelector('[data-copy]');
const status = document.querySelector('.copy-status');
if (copyButton && navigator.clipboard && window.isSecureContext) {
  copyButton.hidden = false;
  copyButton.addEventListener('click', async () => {
    try {
      await navigator.clipboard.writeText(copyButton.dataset.copy);
      status.textContent = 'E-Mail-Adresse kopiert.';
    } catch {
      status.textContent = 'Bitte markiere und kopiere die E-Mail-Adresse oben.';
    }
  });
}
