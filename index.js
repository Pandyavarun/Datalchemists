const clerkPublishableKey = "pk_test_cG93ZXJmdWwtZG9yeS04OC5jbGVyay5hY2NvdW50cy5kZXYk";
const frontendApi = 'https://www.finovative.biz.clerk.accounts.dev';
const version = '@latest';


document.getElementById('home-buttons').addEventListener('click', function() {
    window.Clerk.openSignIn({ signUp: true });
});
const script = document.createElement('script');
script.setAttribute('data-clerk-publishable-key', 'pk_[publishable_key]');
script.async = true;
script.src = `https://finnovative.biz.clerk.accounts.dev/npm/@clerk/clerk-js@latest/dist/clerk.browser.js`;

script.addEventListener('load', async function() {
    await window.Clerk.load();

    const userButtonComponent = document.querySelector('#user-button');

    window.Clerk.mountUserButton(userButtonComponent, {
        appearance: {
            baseTheme: dark
        }
    });
});
document.body.appendChild(script);