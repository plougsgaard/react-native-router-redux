import { createConstants } from './utils';

export const actionTypes = {
  'ROUTER_CHANGE_TAB': 'react-native-router-redux/ROUTER_CHANGE_TAB',
  'ROUTER_INIT': 'react-native-router-redux/ROUTER_INIT',
  'ROUTER_POP': 'react-native-router-redux/ROUTER_POP',
  'ROUTER_PUSH': 'react-native-router-redux/ROUTER_PUSH',
  'ROUTER_REPLACE': 'react-native-router-redux/ROUTER_REPLACE',
  'ROUTER_RESET': 'react-native-router-redux/ROUTER_RESET'
}

const filter = data => {
  if (typeof(data) !== 'object') {
    return data;
  }
  if (!data) {
    return;
  }

  var proto = (data || {}).constructor.name;

  if (proto != 'Object') {
    data = {};
  }
  if (data.data) {
    data.data = filter(data.data);
  }

  return data;
};

export function changeTab(data) {
  return {
    type: actionTypes.ROUTER_CHANGE_TAB,
    payload: filter(data),
  };
}

export function init(data) {
  return {
    type: actionTypes.ROUTER_INIT,
    payload: filter(data),
  };
}

export function pop(data) {
  return {
    type: actionTypes.ROUTER_POP,
    payload: filter(data),
  };
}

export function push(data) {
  return {
    type: actionTypes.ROUTER_PUSH,
    payload: filter(data),
  };
}

export function reset(data) {
  return {
    type: actionTypes.ROUTER_RESET,
    payload: filter(data),
  };
}

export function replace(data) {
  return {
    type: actionTypes.ROUTER_REPLACE,
    payload: filter(data),
  };
}
