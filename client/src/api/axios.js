import axios from 'axios';

export default axios.create({
  baseURL:'http://localhost:3500'
});


// export default axios.post('http://localhost:5000/api/users', {
//     email: 'Nimi@gmail.com',
//     password: 'Pass123'
//   })
//   .then(function (response) {
//     console.log(response);
//   })
//   .catch(function (error) {
//     console.log(error);
//   });

