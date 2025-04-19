// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Show subscription modal after 5 seconds
    setTimeout(function() {
        var subscriptionModal = new bootstrap.Modal(document.getElementById('subscriptionModal'));
        subscriptionModal.show();
    }, 5000);
}); 