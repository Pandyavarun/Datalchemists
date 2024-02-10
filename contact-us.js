document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('contactForm');
  form.addEventListener('submit', (event) => {
    event.preventDefault();

    const name = document.getElementById('name').nextElementSibling.value;
    const email = document.getElementById('email').nextElementSibling.value;
    const description = document.getElementById('description').nextElementSibling.value;

    const payload = {
      Description: description,
      Email: email,
      Name: name
    };

    axios.post('https://ap-south-1.aws.neurelo.com/rest/User_Details/__one', payload, {
      headers: {
        'Content-Type': 'application/json',
        'X-API-KEY': 'neurelo_9wKFBp874Z5xFw6ZCfvhXYhbUbFQ3TVvL22usi1HsbtA0rnE3c2rXIx+Q6X+g8Bdnk7p8w0PXiDwxM4whQkGiSeprqCD9GDCrhjssj/+B2ccI+nBDKfmYv0gfIHLP5YIYPuZTjg0PfxLPsqYfHtgRvntQ9tV1DLj6TdFLIej2BPERazMOps5yMXG1eXUL/3i_y9iyCpcjkdwFIaoDn/ucPxuIDJwxB89L2UusIGdGAgM='
      }
    })
    .then((response) => {
      console.log(response.data);
      // Handle successful response here
    })
    .catch((error) => {
      console.error(error);
      // Handle error here
    });
  });
});