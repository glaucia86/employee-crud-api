/**
 * file: assets/icons.js
 * date: 04/11/2020
 * description: arquivo responsável por lidar com a lógica dos ícones na aplicação
 * author: Glaucia Lemos - Twitter <@glaucia_lemos86>
 */

import Vue from 'vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faUserPlus, faUserEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

library.add(faUserPlus, faUserEdit, faTrash);

Vue.component('font-awesome-icon', FontAwesomeIcon);
