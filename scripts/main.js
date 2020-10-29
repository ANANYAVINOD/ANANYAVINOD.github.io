import {reg} from './register.js';
import {loginAuthentication} from './login.js';
import {loadMessages} from './message.js';
import {searchHome} from './search.js';
import {menuItems} from './menu.js';

window.addEventListener('load', function(evt) {
  reg.register();
  loginAuthentication.login();
  loadMessages.msg();  
  searchHome.search();  
  menuItems.menuShow();
});
