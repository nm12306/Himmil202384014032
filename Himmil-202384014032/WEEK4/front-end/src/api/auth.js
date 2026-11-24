import request from '@/utils/request';

// 用户注册
export function register(shanxiligong_data) {
  return request({ url: '/api/auth/register', method: 'post', data: shanxiligong_data });
}

// 用户登录
export function login(shanxiligong_data) {
  return request({ url: '/api/auth/login', method: 'post', data: shanxiligong_data });
}

// 管理员登录
export function adminLogin(shanxiligong_data) {
  return request({ url: '/api/auth/admin/login', method: 'post', data: shanxiligong_data });
}

// 修改密码
export function changePassword(shanxiligong_data) {
  return request({ url: '/api/auth/password', method: 'put', data: shanxiligong_data });
}