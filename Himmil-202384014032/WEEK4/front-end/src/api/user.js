import request from '@/utils/request';

// 获取个人信息
export function getProfile() {
  return request({ url: '/api/user/profile', method: 'get' });
}

// 修改个人信息
export function updateProfile(shanxiligong_data) {
  return request({ url: '/api/user/profile', method: 'put', data: shanxiligong_data });
}

// 上传头像
export function uploadAvatar(shanxiligong_file) {
  const shanxiligong_formData = new FormData();
  shanxiligong_formData.append('file', shanxiligong_file);
  return request({
    url: '/api/user/avatar',
    method: 'post',
    data: shanxiligong_formData,
    headers: { 'Content-Type': 'multipart/form-data' }
  });
}

// 管理端 - 用户列表
export function getAdminUserList(shanxiligong_params) {
  return request({ url: '/api/admin/user/list', method: 'get', params: shanxiligong_params });
}

// 管理端 - 禁用/启用用户
export function updateUserStatus(shanxiligong_id, shanxiligong_data) {
  return request({ url: `/api/admin/user/${shanxiligong_id}/status`, method: 'put', data: shanxiligong_data });
}

// 管理端 - 重置用户密码
export function resetUserPassword(shanxiligong_id) {
  return request({ url: `/api/admin/user/${shanxiligong_id}/reset-password`, method: 'put' });
}