const menu_btn = document.querySelector('menu_btn');
const exit_btn = document.querySelector('exit_btn');
const paneltabletclosed = document.querySelector('.paneltabletclosed');
const panelphoneclosed = document.querySelector('.panelphoneclosed');
const menu = document.querySelector('.menu');
const menuicon = document.querySelector('.menuicon')
let isDropped = false;

function DropMenu()
{
    if (isDropped == false)
    {
        paneltabletclosed.style.display = `none`;
        menu.style.display = `unset`; 
        isDropped = true;
    }
    else
    {
        paneltabletclosed.style.display = `grid`;
        menu.style.display = `none`; 
        isDropped = false;
    }
}
