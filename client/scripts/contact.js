emailjs.init('gGsAqaQhvZFyToU-S');
const form = document.querySelector('.php-email-form')

const sendEmail = (e) => {

    e.preventDefault()

    const name = form.name.value;
    const email = form.email.value;
    const subject = form.subject.value;
    const message = form.message.value;
  
    const params = {
      from_name: name,
      from_email: email,
      subject: subject,
      message: message,
    };
  
    emailjs.send('service_3f99l9w', 'template_coi7n6m', params)
      .then(function(response) {
        console.log('SUCCESS!', response.status, response.text);
      }, function(error) {
        console.log('FAILED...', error);
      });
}
  