import Home from './scenes/Home/Home';
import Info from './scenes/Info/Info';
import Error from './scenes/Error/Error';

export const routes = [
  { name: 'Home', url: '/', ctrl: Home, attrs: { exact: true }, type : 'primary' },
  { 
    name: 'Info', url: '/info', ctrl: Info, type : 'primary',
    children: [
      { name: 'List', url: '/list', ctrl: Info, type : 'primary' },
      { name: 'Table', url: '/table', ctrl: Info, type : 'primary' },
      { name: 'Form', url: '/form', ctrl: Info, type : 'primary' },
    ]
  },
  { name: 'Error', ctrl: Error },
]
