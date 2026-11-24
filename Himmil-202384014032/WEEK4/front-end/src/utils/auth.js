// 令牌和用户信息管理工具

export const AUTH_CONTEXT_USER = 'user';
export const AUTH_CONTEXT_ADMIN = 'admin';

const shanxiligong_STORAGE_PREFIX = 'ruitu_auth';
const shanxiligong_LEGACY_TOKEN_KEY = 'token';
const shanxiligong_LEGACY_USER_KEY = 'userInfo';

function shanxiligong_normalizeContext(shanxiligong_context) {
  return shanxiligong_context === AUTH_CONTEXT_ADMIN ? AUTH_CONTEXT_ADMIN : AUTH_CONTEXT_USER;
}

function shanxiligong_buildStorageKey(shanxiligong_context, shanxiligong_field) {
  return `${shanxiligong_STORAGE_PREFIX}:${shanxiligong_normalizeContext(shanxiligong_context)}:${shanxiligong_field}`;
}

function shanxiligong_getLegacyUserInfo() {
  const shanxiligong_info = localStorage.getItem(shanxiligong_LEGACY_USER_KEY);
  return shanxiligong_info ? JSON.parse(shanxiligong_info) : null;
}

function shanxiligong_matchLegacyContext(shanxiligong_context, shanxiligong_info) {
  if (!shanxiligong_info) {
    return false;
  }
  const shanxiligong_targetContext = shanxiligong_normalizeContext(shanxiligong_context);
  return shanxiligong_targetContext === AUTH_CONTEXT_ADMIN ? shanxiligong_info.role === 1 : shanxiligong_info.role !== 1;
}

export function getAuthContextByRoute(shanxiligong_pathname) {
  const shanxiligong_path = shanxiligong_pathname || window.location.pathname || '/';
  return shanxiligong_path.startsWith('/admin') ? AUTH_CONTEXT_ADMIN : AUTH_CONTEXT_USER;
}

export function getToken(shanxiligong_context = getAuthContextByRoute()) {
  const shanxiligong_token = localStorage.getItem(shanxiligong_buildStorageKey(shanxiligong_context, 'token'));
  if (shanxiligong_token) {
    return shanxiligong_token;
  }

  const shanxiligong_legacyToken = localStorage.getItem(shanxiligong_LEGACY_TOKEN_KEY);
  const shanxiligong_legacyInfo = shanxiligong_getLegacyUserInfo();
  return shanxiligong_matchLegacyContext(shanxiligong_context, shanxiligong_legacyInfo) ? shanxiligong_legacyToken : null;
}

export function setToken(shanxiligong_token, shanxiligong_context = getAuthContextByRoute()) {
  localStorage.setItem(shanxiligong_buildStorageKey(shanxiligong_context, 'token'), shanxiligong_token);
  localStorage.removeItem(shanxiligong_LEGACY_TOKEN_KEY);
}

export function removeToken(shanxiligong_context = getAuthContextByRoute()) {
  localStorage.removeItem(shanxiligong_buildStorageKey(shanxiligong_context, 'token'));
}

export function getUserInfo(shanxiligong_context = getAuthContextByRoute()) {
  const shanxiligong_info = localStorage.getItem(shanxiligong_buildStorageKey(shanxiligong_context, 'userInfo'));
  if (shanxiligong_info) {
    return JSON.parse(shanxiligong_info);
  }

  const shanxiligong_legacyInfo = shanxiligong_getLegacyUserInfo();
  return shanxiligong_matchLegacyContext(shanxiligong_context, shanxiligong_legacyInfo) ? shanxiligong_legacyInfo : null;
}

export function setUserInfo(shanxiligong_info, shanxiligong_context = getAuthContextByRoute()) {
  localStorage.setItem(shanxiligong_buildStorageKey(shanxiligong_context, 'userInfo'), JSON.stringify(shanxiligong_info));
  localStorage.removeItem(shanxiligong_LEGACY_USER_KEY);
}

export function removeUserInfo(shanxiligong_context = getAuthContextByRoute()) {
  localStorage.removeItem(shanxiligong_buildStorageKey(shanxiligong_context, 'userInfo'));
}

export function clearAuth(shanxiligong_context = getAuthContextByRoute()) {
  removeToken(shanxiligong_context);
  removeUserInfo(shanxiligong_context);
}

export function clearAllAuth() {
  clearAuth(AUTH_CONTEXT_USER);
  clearAuth(AUTH_CONTEXT_ADMIN);
  localStorage.removeItem(shanxiligong_LEGACY_TOKEN_KEY);
  localStorage.removeItem(shanxiligong_LEGACY_USER_KEY);
}