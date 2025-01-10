// Smooth Scroll for Navigation Links
document.querySelectorAll('nav .links a').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href').slice(1); // Remove '#' if present
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Handle "GET YOUR TICKET" button click
document.querySelector('.content button').addEventListener('click', () => {
    alert('Redirecting to the ticket booking page...');
    // Example redirection: Replace '#' with your booking page URL
    window.location.href = '#';
});

// Responsive Menu Toggle (Optional)
const menuToggle = document.createElement('div');
menuToggle.classList.add('menu-toggle');
menuToggle.innerHTML = '&#9776;'; // Hamburger icon
document.querySelector('nav').prepend(menuToggle);

menuToggle.addEventListener('click', () => {
    document.querySelector('.links').classList.toggle('active');
});

// CSS for responsive menu (you can add this to your CSS file)
const style = document.createElement('style');
style.innerHTML = `
    .menu-toggle {
        display: none;
        font-size: 2rem;
        cursor: pointer;
        color: white;
    }

    .links.active {
        flex-direction: column;
        position: absolute;
        top: 10vh;
        left: 0;
        width: 100%;
        background: rgba(0, 0, 0, 0.8);
        padding: 10px 0;
    }

    .links.active a {
        margin: 10px 0;
    }

    @media (max-width: 768px) {
        .menu-toggle {
            display: block;
        }

        .links {
            display: none;
            flex-direction: column;
            width: 100%;
        }

        .links.active {
            display: flex;
        }
    }
`;
document.head.appendChild(style);
