import {createGlobalStyle} from 'styled-components';

import 'font-awesome/css/font-awesome.css';

const GlobalStyle = createGlobalStyle`
* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  outline: 0;
}

body, html {
  background: #eee;
  font-family: 'Helvetica Neue', 'Helvetica', Arial, sans-serif;
  text-rendering: optimizeLegibility !important;
  -webkit-font-smoothing: antialiased !important;
  height: 100%;
  width: 100%;
  font-size: 14px;
}

.tamanho-letras-1 {
  font-size: initial!important;
  
  .ant-menu-vertical .ant-menu-item, .ant-menu-vertical-left .ant-menu-item,
  .ant-menu-vertical-right .ant-menu-item, .ant-menu-inline .ant-menu-item, .ant-menu-vertical
  .ant-menu-submenu-title, .ant-menu-vertical-left .ant-menu-submenu-title, .ant-menu-vertical-right
  .ant-menu-submenu-title, .ant-menu-inline .ant-menu-submenu-title,
  .ant-form-item, .ant-input, .ant-btn {
    font-size: initial!important;
  }
}
.tamanho-letras-2 {
  font-size: large!important;
  
  .ant-menu-vertical .ant-menu-item, .ant-menu-vertical-left .ant-menu-item,
  .ant-menu-vertical-right .ant-menu-item, .ant-menu-inline .ant-menu-item, .ant-menu-vertical
  .ant-menu-submenu-title, .ant-menu-vertical-left .ant-menu-submenu-title, .ant-menu-vertical-right
  .ant-menu-submenu-title, .ant-menu-inline .ant-menu-submenu-title,
  .ant-form-item, .ant-input, .ant-btn {
    font-size: large!important;
  }
}
.tamanho-letras-3 {
  font-size: x-large!important;
  
  .ant-menu-vertical .ant-menu-item, .ant-menu-vertical-left .ant-menu-item,
  .ant-menu-vertical-right .ant-menu-item, .ant-menu-inline .ant-menu-item, .ant-menu-vertical
  .ant-menu-submenu-title, .ant-menu-vertical-left .ant-menu-submenu-title, .ant-menu-vertical-right
  .ant-menu-submenu-title, .ant-menu-inline .ant-menu-submenu-title,
  .ant-form-item, .ant-input, .ant-btn {
    font-size: x-large!important;
  }
}
.tamanho-letras-4 {
  font-size: xx-large!important;
  
  .ant-menu-vertical .ant-menu-item, .ant-menu-vertical-left .ant-menu-item,
  .ant-menu-vertical-right .ant-menu-item, .ant-menu-inline .ant-menu-item, .ant-menu-vertical
  .ant-menu-submenu-title, .ant-menu-vertical-left .ant-menu-submenu-title, .ant-menu-vertical-right
  .ant-menu-submenu-title, .ant-menu-inline .ant-menu-submenu-title,
  .ant-form-item, .ant-input, .ant-btn {
    font-size: xx-large!important;
  }
}
`;

export default GlobalStyle
