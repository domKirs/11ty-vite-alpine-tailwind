import Alpine from 'alpinejs';
import counter from './data/counter.js';
import darkMode from './store/darkMode.js';

Alpine.data('counter', counter);

Alpine.store('darkMode', darkMode());

Alpine.start();