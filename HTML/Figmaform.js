// document.getElementById('createAccountForm').addEventListener('submit', function(e) {
//     e.preventDefault();

//     let password = document.getElementById('password').value;
//     let confirmPassword = document.getElementById('confirmPassword').value;

//     if(password !== confirmPassword) {
//         alert("Passwords do not match!");
//         return false;
//     }
//     alert("Account created successfully!");
// });



// Function to toggle the password visibility
// document.querySelectorAll('.toggle-password').forEach((icon) => {
//     icon.addEventListener('click', function() {
//         // Get the target input field using the data-target attribute of the clicked icon
//         const targetInput = document.getElementById(this.dataset.target);

//         // Toggle the input type between 'password' and 'text'
//         if (targetInput.type === 'password') {
//             targetInput.type = 'text';
//             this.src = 'hiddenpassword.png'; // Change the icon to the "hide" version (e.g., closed eye)
//         } else {
//             targetInput.type = 'password';
//             this.src = 'shownpassword.png'; // Change the icon to the "show" version (e.g., open eye)
//         }
//     });
// });

= 0 ? '&' : '?') + '_cacheOverride=' + (new Date().valueOf()); } parent.appendChild(elem); } } var protocol = window.location.protocol === 'http:' ? 'ws://' : 'wss://'; var address = protocol + window.location.host + window.location.pathname + '/ws'; var socket = new WebSocket(address); socket.onmessage = function (msg) { if (msg.data == 'reload') window.location.reload(); else if (msg.data == 'refreshcss') refreshCSS(); }; if (sessionStorage && !sessionStorage.getItem('IsThisFirstTime_Log_From_LiveServer')) { console.log('Live reload enabled.'); sessionStorage.setItem('IsThisFirstTime_Log_From_LiveServer', true); } })(); } else { console.error('Upgrade your browser. This Browser is NOT supported WebSocket for Live-Reloading.'); } // ]]>