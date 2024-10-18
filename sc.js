function myFunction() {
    var x = document.getElementById("myInput");
    if (x) {  // Check if the element exists
        if (x.type === "password") {
            x.type = "text";
        } else {
            x.type = "password";
        }
    } else {
        console.error("Element with ID 'myInput' not found");
    }
}

function TU_REST_API() {
  document.getElementById('loginform').addEventListener('submit', async function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    const data = {
      Username: username,
      Password: password
    };

    try {
      const applicationKey = "TU91cdfb88202ca2076b3702a145465ca451a000ea05b6255d63e7f71bb1558c2972efe64659661b01af7e8e95a2ee7281";
      const response = await fetch('https://restapi.tu.ac.th/api/v1/auth/Ad/verify', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Application-Key': applicationKey
        },
        body: JSON.stringify(data)
      });

      const result = await response.json();

      if (response.ok) {
        console.log('Login Successful:', result);
        alert('Login success');
      } else {
        console.log('error:', result);
        alert('Login failed: ' + result.message);
      }
    } catch (error) {
      console.error('error', error);
    }
  });
}
