// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Only show subscription modal on home page
    if (window.location.pathname.endsWith('main.html') || 
        window.location.pathname.endsWith('/') || 
        window.location.pathname.endsWith('index.html')) {
        // Show subscription modal after 5 seconds
        setTimeout(function() {
            var subscriptionModal = new bootstrap.Modal(document.getElementById('subscriptionModal'));
            subscriptionModal.show();
        }, 5000);
    }
}); 