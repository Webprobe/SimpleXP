let simplexp_hamburger = document.querySelector(".hamburger-icon");
let simplexp_navbar = document.querySelector(".navbar");
let simplexp_menu = document.querySelector(".menu");
let simplexp_hamburgerIcon = document.querySelector('.hamburger-icon button');

// Show menu on mobile
simplexp_hamburger.addEventListener("click", function() {

  // simplexp_navbar.classList.toggle('open');
  document.body.classList.toggle('nav-open');
  simplexp_hamburger.classList.toggle('close');

});


//Only on mobile
if (window.innerWidth < 1190) {
  // Open submenu on mobile
  let simplexp_dropdowns = document.querySelectorAll('.menu-item-has-children > a');

  simplexp_dropdowns.forEach((item) => {
    item.addEventListener("click", function(e) {
      e.preventDefault();
      const currentMenuId = item.parentNode.id; // Otteniamo l'ID del menu corrente

      simplexp_dropdowns.forEach((simplexp_item_opened) => {
        const otherMenuId = simplexp_item_opened.parentNode.id;
        if (otherMenuId !== currentMenuId) {
          simplexp_item_opened.parentNode.classList.remove('sub-menu-visible');
        }
      });

      item.parentNode.classList.toggle('sub-menu-visible');
    });
  });

}


//One Page Scroll - link managment
document.addEventListener('DOMContentLoaded', () => {
  let simplexp_links = document.querySelectorAll('.navbar a');
    let simplexp_currentUrl = new URL(window.location.href);


    simplexp_links.forEach(link => {
      
      link.addEventListener('click', (event) => {
        event.preventDefault();

        let targetUrl = new URL(link.href);

        if(/*simplexp_currentUrl.origin === targetUrl.origin &&*/ simplexp_currentUrl.pathname === targetUrl.pathname) {// It is an internal link
          
          if(targetUrl.hash === "" || targetUrl.hash === "#") {//The internal link is not valid
            return;
          }

          if(window.innerWidth < 1190) { //On mobile close menu and sub-menu
            let sub_menu_visible = document.querySelector('.menu li.sub-menu-visible');
            sub_menu_visible.classList.remove('sub-menu-visible')
            simplexp_navbar.classList.remove('open');
            simplexp_hamburger.classList.remove('close');
          }else {//On desktop remove :focus-within pseudoelement from link (.menu-item-has-children)
            link.blur();
          }

          history.pushState({}, '', `${targetUrl.hash}`);

          let targetElement = document.querySelector(targetUrl.hash);

          if(targetElement) {//Smooth scroll to the section if exists
            offset = link.dataset.offset ? parseInt(link.dataset.offset) : 0,
            bodyOffset = document.body.getBoundingClientRect().top;
            window.scrollTo({
                top: targetElement.getBoundingClientRect().top - bodyOffset + offset,
                behavior: 'smooth'
            });
          }
          
        }else {//If it's an external link
          window.location.href = link.href;
        }
          
      });

    });

});




/* FAQ Toggler */
let simplexp_faq_items = document.querySelectorAll('.faq .wp-block-columns.faq-title');

simplexp_faq_items.forEach((item) => {
	item.addEventListener("click", function(e) {
		e.preventDefault();
		item.nextElementSibling.classList.toggle('show-group-block');
	});
});




// Menu Keyboard Navigation
simplexp_navbar.addEventListener('keydown', function(event) {
  
    var menuItems = simplexp_navbar.querySelectorAll('.menu-item > a');
    var firstMenuItem = menuItems[0];
    var lastMenuItem = menuItems[menuItems.length - 1];
    if(simplexp_navbar.classList.contains('open')) {
      if(event.key === 'Tab') {
        if(event.shiftKey) { // Shift + Tab
          if(document.activeElement === firstMenuItem) {
            event.preventDefault();
            simplexp_hamburgerIcon.focus();
          }

        } else { // Tab
          if(document.activeElement === lastMenuItem) {
            event.preventDefault();
            simplexp_hamburgerIcon.focus();
          }
        }
      }
    }
});



simplexp_hamburgerIcon.addEventListener('keydown', function(event) {

  var menuItems = simplexp_navbar.querySelectorAll('.menu-item > a');
  var firstMenuItem = menuItems[0];
  var lastMenuItem = menuItems[menuItems.length - 1];
  if(simplexp_navbar.classList.contains('open')) {
    if(event.shiftKey) {
      event.preventDefault();
      // Focus was moved to the hamburger icon using Shift+Tab.
      lastMenuItem.focus();
    }else if(event.key === 'Tab') {
      event.preventDefault();
      // Focus has come to the hamburger icon using Tab.
      firstMenuItem.focus();
    }
  }

});

simplexp_hamburgerIcon.addEventListener('keyup', function(event) {
  if(event.key === 'Enter') {
    console.log("Enter on ham");
    if(simplexp_navbar.classList.contains('open')) {
      document.querySelector('.navbar .menu > li:first-child > a').focus();
    }
  }
});



