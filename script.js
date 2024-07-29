<script>
function processPayment() {
const form = document.getElementById('paymentForm');
  
  fetch('process_payment.php', {
    method: 'POST',
    body: new FormData(form),
  })
  .then(response => response.json())
  .then(data => {
    var options = {
      "key": data.key,
      "amount": "236000", // Amount in paise
      "currency": "INR",
      "name": "BDA Technologies",
      "description": "Make payment securely",
      "image": "/logo.png",
      "order_id": data.orderID,
      "handler": function(response) {
        alert("Payment Successful");
        // Optionally, send response to your server for verification
      },
      "prefill": {
        "name": document.querySelector('input[placeholder="Name"]').value,
        "email": document.querySelector('input[placeholder="Email"]').value,
        "contact": document.querySelector('input[placeholder="+91 XXXXXXXXXX"]').value
      },
      "theme": {
        "color": "#3399cc"
      }
    };
    var rzp1 = new Razorpay(options);
    rzp1.open();
  });
}
</script>
