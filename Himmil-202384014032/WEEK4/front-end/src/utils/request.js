import axios from 'axios';
import message from '@/utils/message';
import { getAuthContextByRoute, getToken, clearAuth, AUTH_CONTEXT_ADMIN } from '@/utils/auth';
import router from '@/router';

// 创建axios实例
const shanxiligong_service = axios.create({
  baseURL: '',
  timeout: 15000
});

function shanxiligong_getCurrentRoutePath() {
  return router.currentRoute?.path || window.location.pathname || '/';
}

function shanxiligong_resolveAuthContext(shanxiligong_config = {}, shanxiligong_fallbackPath = shanxiligong_getCurrentRoutePath()) {
  if (shanxiligong_config.authContext) {
    return shanxiligong_config.authContext;
  }

  const shanxiligong_url = shanxiligong_config.url || '';
  if (shanxiligong_url.startsWith('/api/admin/') || shanxiligong_url === '/api/auth/admin/login') {
    return AUTH_CONTEXT_ADMIN;
  }

  return getAuthContextByRoute(shanxiligong_fallbackPath);
}

function shanxiligong_redirectToLogin(shanxiligong_context = getAuthContextByRoute()) {
  const shanxiligong_loginPath = shanxiligong_context === AUTH_CONTEXT_ADMIN ? '/admin/login' : '/login';
  if (router.currentRoute?.path !== shanxiligong_loginPath) {
    router.push(shanxiligong_loginPath).catch(() => {});
  }
}

function shanxiligong_createHandledError(shanxiligong_messageText, shanxiligong_extra = {}) {
  const shanxiligong_error = new Error(shanxiligong_messageText || '请求失败');
  shanxiligong_error.__handled = true;
  return Object.assign(shanxiligong_error, shanxiligong_extra);
}

// 请求拦截器，附加JWT令牌
shanxiligong_service.interceptors.request.use(
  (shanxiligong_config) => {
    const shanxiligong_authContext = shanxiligong_resolveAuthContext(shanxiligong_config);
    shanxiligong_config.authContext = shanxiligong_authContext;
    const shanxiligong_token = getToken(shanxiligong_authContext);
    if (shanxiligong_token) {
      shanxiligong_config.headers['Authorization'] = 'Bearer ' + shanxiligong_token;
    }
    return shanxiligong_config;
  },
  (shanxiligong_error) => {
    return Promise.reject(shanxiligong_error);
  }
);

// 响应拦截器，统一处理错误
shanxiligong_service.interceptors.response.use(
  (shanxiligong_response) => {
    // blob类型直接返回
    if (shanxiligong_response.config.responseType === 'blob') {
      return shanxiligong_response.data;
    }

    const shanxiligong_res = shanxiligong_response.data;
    const shanxiligong_authContext = shanxiligong_resolveAuthContext(shanxiligong_response.config);

    if (shanxiligong_res.code === 200) {
      return shanxiligong_res;
    }

    if (shanxiligong_res.code === 401) {
      clearAuth(shanxiligong_authContext);
      message.error('登录已过期，请重新登录');
      shanxiligong_redirectToLogin(shanxiligong_authContext);
      return Promise.reject(shanxiligong_createHandledError(shanxiligong_res.message || '登录已过期', { code: 401 }));
    }

    if (shanxiligong_res.code === 403) {
      message.error('权限不足');
      return Promise.reject(shanxiligong_createHandledError(shanxiligong_res.message || '权限不足', { code: 403 }));
    }

    message.error(shanxiligong_res.message || '请求失败');
    return Promise.reject(shanxiligong_createHandledError(shanxiligong_res.message || '请求失败', { code: shanxiligong_res.code }));
  },
  (shanxiligong_error) => {
    const shanxiligong_response = shanxiligong_error.response;
    const shanxiligong_authContext = shanxiligong_resolveAuthContext(shanxiligong_error.config || {});
    if (shanxiligong_response) {
      if (shanxiligong_response.status === 401) {
        clearAuth(shanxiligong_authContext);
        message.error('登录已过期，请重新登录');
        shanxiligong_redirectToLogin(shanxiligong_authContext);
      } else if (shanxiligong_response.status === 403) {
        message.error('权限不足');
      } else {
        message.error(shanxiligong_response.data?.message || '服务器异常，请稍后重试');
      }
    } else {
      message.error('网络连接异常，请检查网络');
    }
    return Promise.reject(shanxiligong_createHandledError(shanxiligong_error.message || '请求失败', {
      response: shanxiligong_error.response,
      originalError: shanxiligong_error
    }));
  }
);

export default shanxiligong_service;