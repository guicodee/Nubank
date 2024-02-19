// ? SCROLL

function ScrollHeader() {
    const nav = document.querySelector( '#header' );
    if( this.scrollY >= 50 ) nav.classList.add( 'active-header' ); else nav.classList.remove( 'active-header' );
};

window.addEventListener( 'scroll', ScrollHeader );


// ! DROPDOWN DESKTOP
const dropdownMenu1 = document.querySelector( '#dropdown-item-1' );
const dropdownMenu2 = document.querySelector( '#dropdown-item-2' );
const dropdownMenu3 = document.querySelector( '#dropdown-item-3' );

const menuItem1 = document.querySelector( '#menu-item-1' );
const menuItem2 = document.querySelector( '#menu-item-2' );
const menuItem3 = document.querySelector( '#menu-item-3' );

// ? Mesmas funções, somente mudando a ordem.
function ShowDropdown1(e) {
    e.preventDefault(); // Cancela o comportamento do elemento.
    dropdownMenu1.classList.toggle( 'active-dropdown-menu' );
    dropdownMenu2.classList.remove( 'active-dropdown-menu' );
    dropdownMenu3.classList.remove( 'active-dropdown-menu' );
}

function ShowDropdown2(e) {
    e.preventDefault(); 
    dropdownMenu1.classList.remove( 'active-dropdown-menu' );
    dropdownMenu2.classList.toggle( 'active-dropdown-menu' );
    dropdownMenu3.classList.remove( 'active-dropdown-menu' );
}

function ShowDropdown3(e) {
    e.preventDefault(); 
    dropdownMenu1.classList.remove( 'active-dropdown-menu' );
    dropdownMenu2.classList.remove( 'active-dropdown-menu' );
    dropdownMenu3.classList.toggle( 'active-dropdown-menu' );
}
// ? Quando tirar o mouse do dropdown, ele remove o dropdown da tela.
function RemoveDropdown() {
    dropdownMenu1.classList.remove( 'active-dropdown-menu' );
    dropdownMenu2.classList.remove( 'active-dropdown-menu' );
    dropdownMenu3.classList.remove( 'active-dropdown-menu' );
}
// ! EVENTOS
menuItem1.addEventListener( 'click', ShowDropdown1 );
menuItem2.addEventListener( 'click', ShowDropdown2 );
menuItem3.addEventListener( 'click', ShowDropdown3 );

dropdownMenu1.addEventListener('mouseleave', RemoveDropdown);
dropdownMenu2.addEventListener('mouseleave', RemoveDropdown);
dropdownMenu3.addEventListener('mouseleave', RemoveDropdown);


// Menu Mobile
// ! FAZER APARECER O MENU MOBILE.
function showMenu(toggleId, navId) {
    const toggle = document.getElementById(toggleId);
    const nav = document.getElementById(navId);

    if ( toggle && nav ) {
        toggle.addEventListener('click', () => {
            nav.classList.toggle('active-menu-mobile');
            toggle.classList.toggle('active-bx');
        })
    }
}

showMenu('bx', 'menu-mobile')