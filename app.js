function openMenu() {
  const body = document.body;

  body.classList.add("open");
}

function closeMenu() {
  const body = document.body;

  body.classList.remove("open");
}

// template_9o2zl2x

// service_qea3uol

// _dHc8wWqv4WzW-BZp

async function sendEmail(event) {
  event.preventDefault();
  const body = document.body;
  const loading = document.querySelector(".contact__form__loading");
  const form = document.querySelector(".contact__form");

  try {
    //   Loading state
    loading.classList.remove("hidden");

    await emailjs.sendForm(
      "service_qea3uol",
      "template_oyw0wlv",
      event.target,
      "_dHc8wWqv4WzW-BZp"
    );

    //   Success State
    form.reset();
    loading.classList.add("hidden");
    body.classList.add("success-open");
    setTimeout(() => body.classList.remove("success-open"), 5000);
    console.log("email sent");
  } catch {
    loading.classList.add("hidden")
    alert(
      "An error has occured. Please try again later or contact me at hadizaheer@outlook.com"
    );
  }
}
