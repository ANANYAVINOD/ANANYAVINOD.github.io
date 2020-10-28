import {reg} from './register.js';
import {loginData} from './login.js';
import {loadMessages} from './message.js';
import {searchHome} from './search.js';
import {menuItems} from './menu.js';

window.addEventListener('load', function(evt) {
  reg.register();
  loginData.login();
  loadMessages.msg();
  searchHome.search();
  menuItems.menuShow();
});
