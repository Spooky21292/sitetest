const yearElement = document.getElementById('year');
const copyButton = document.getElementById('copyEmailBtn');
const emailValue = document.getElementById('emailValue');
const toast = document.getElementById('toast');

if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}

let toastTimer;

const showToast = () => {
  toast.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => {
    toast.classList.remove('show');
  }, 1800);
};

copyButton?.addEventListener('click', async () => {
  const email = emailValue?.textContent?.trim() || '';

  if (!email) {
    return;
  }

  try {
    await navigator.clipboard.writeText(email);
    showToast();
  } catch (error) {
    const area = document.createElement('textarea');
    area.value = email;
    area.setAttribute('readonly', '');
    area.style.position = 'absolute';
    area.style.left = '-9999px';
    document.body.appendChild(area);
    area.select();
    document.execCommand('copy');
    document.body.removeChild(area);
    showToast();
  }
});
