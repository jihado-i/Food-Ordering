document.addEventListener("DOMContentLoaded", function () {
    emailjs.init("TyZ1gEFNOxocrpbhT"); // 🔑 مفتاحك العام

    const form = document.getElementById('order-form');
    const alertBox = document.getElementById('success-alert');
    const alertMessage = document.getElementById('success-message');

    form.addEventListener('submit', function (e) {
        e.preventDefault();

        emailjs.sendForm('service_gtnpyng', 'template_pwbij7f', this)
        .then(() => {
            alertMessage.textContent = "✅ Sipariş başarıyla gönderildi!";
            alertBox.style.display = 'block';

            setTimeout(() => {
                alertBox.style.display = 'none';
            }, 2000); // 2 ثواني

            form.reset();
        }, (error) => {
            alertMessage.textContent = "❌ Gönderim sırasında bir hata oluştu.";
            alertBox.style.display = 'block';

            setTimeout(() => {
                alertBox.style.display = 'none';
            }, 2000);

            console.error("Error:", error);
        });
    });
});
