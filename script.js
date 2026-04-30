document.addEventListener('DOMContentLoaded', () => {
    // Navbar Scroll Effect
    const navbar = document.querySelector('.navbar');
    const mobileStickyBar = document.querySelector('.mobile-sticky-bar');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Mobile Menu Toggle
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const mobileNavOverlay = document.querySelector('.mobile-nav-overlay');
    const mobileNavClose = document.querySelector('.mobile-nav-close');
    const mobileNavLinks = document.querySelectorAll('.mobile-nav-links a');

    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', () => {
            mobileNavOverlay.classList.add('active');
            document.body.style.overflow = 'hidden'; // Prevent scrolling
        });
    }

    if (mobileNavClose) {
        mobileNavClose.addEventListener('click', () => {
            mobileNavOverlay.classList.remove('active');
            document.body.style.overflow = 'auto'; // Enable scrolling
        });
    }

    mobileNavLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileNavOverlay.classList.remove('active');
            document.body.style.overflow = 'auto';
        });
    });

    // Accordion (FAQ)
    const accordionHeaders = document.querySelectorAll('.accordion-header');

    accordionHeaders.forEach(header => {
        header.addEventListener('click', () => {
            const item = header.parentElement;
            
            // Close other open items
            const activeItem = document.querySelector('.accordion-item.active');
            if (activeItem && activeItem !== item) {
                activeItem.classList.remove('active');
            }
            
            // Toggle current item
            item.classList.toggle('active');
        });
    });

    // Form Submission
    const form = document.getElementById('enquiry-form');
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Get form values
            const name = document.getElementById('name').value;
            const mobile = document.getElementById('mobile').value;
            const destination = document.getElementById('destination').value;
            const dates = document.getElementById('dates').value;
            const groupSize = document.getElementById('group-size').value;
            const budget = document.getElementById('budget').value;
            const requirements = document.getElementById('requirements').value;
            
            // Construct WhatsApp Message
            let message = `*New Trip Enquiry*%0A%0A`;
            message += `*Name:* ${name}%0A`;
            message += `*Mobile:* ${mobile}%0A`;
            if (destination) message += `*Destination:* ${destination}%0A`;
            if (dates) message += `*Dates:* ${dates}%0A`;
            if (groupSize) message += `*Group Size:* ${groupSize}%0A`;
            if (budget) message += `*Budget:* ${budget}%0A`;
            if (requirements) message += `*Requirements:* ${requirements}%0A`;
            
            // Redirect to WhatsApp
            const whatsappNumber = '919876543210';
            const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`;
            
            window.open(whatsappUrl, '_blank');
            
            // Reset form
            form.reset();
            alert('Your enquiry has been sent via WhatsApp! We will connect with you shortly.');
        });
    }
});
