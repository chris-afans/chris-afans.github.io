// fetch("https://api.nasa.gov/planetary/apod")
//   .then(response => {
//     if (!response.ok) {
//       throw new Error('Network response was not ok');
//     }
//     return response.json();
//   })
//   .then(data => {
//     $("#title").html(data.title);
//     $("pic").src(data.url);
    
//   })
//   .catch(error => {
//     console.log(error);
//   });




// $(document).ready(
//     function () {
//         $("#view_button").click(getPictureDetails);
//     });

//     function getPictureDetails() {
//         let url = 'https://api.nasa.gov/planetary/apod';
//     try {
//         let res =  fetch(url);
//         return res;
//     } catch (error) {
//         console.log(error);
//     }
//     }; 
    
    
//     function renderpDetails() {
//         let pDetails = getPictureDetails();
//         pDetails.forEach(pDetail => {
//             $("#title").html(pDetail.title);
//             $("pic").src(pDetail.url);
//             // let htmlSegment = `<div class="user">
//             //                     <img src="${user.profileURL}" >
//             //                     <h2>${user.firstName} ${user.lastName}</h2>
//             //                     <div class="email"><a href="email:${user.email}">${user.email}</a></div>
//             //                 </div>`;
    
//             // html += htmlSegment;
//         });
    
//         // let container = document.querySelector('.container');
//         // container.innerHTML = html;
//     }
    
//     renderpDetails();


const viewButton = document.getElementById('view_button');
const dateInput = document.getElementById('date');
const title = document.getElementById('title');
const pic = document.getElementById('pic');
const loader = document.getElementById('loader');

viewButton.addEventListener('click', () => {
    
  loader.style.display = 'block';
  const date = dateInput.value;
  const apiUrl = `https://api.nasa.gov/planetary/apod?date=${date}&api_key=DEMO_KEY`;

  fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      title.innerText = data.title;
      pic.src = data.url;
      loader.style.display = 'none';
    })
    .catch(error => {
      console.error(error);
      loader.style.display = 'none';
    });
});
