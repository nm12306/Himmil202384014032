import request from '@/utils/request';

// 分页查询就业数据
export function getDataList(shanxiligong_params) {
  return request({ url: '/api/data/list', method: 'get', params: shanxiligong_params });
}

// 查看数据详情
export function getDataDetail(shanxiligong_id) {
  return request({ url: `/api/data/${shanxiligong_id}`, method: 'get' });
}

// 管理端 - 新增就业数据
export function addData(shanxiligong_data) {
  return request({ url: '/api/admin/data', method: 'post', data: shanxiligong_data });
}

// 管理端 - 修改就业数据
export function updateData(shanxiligong_id, shanxiligong_data) {
  return request({ url: `/api/admin/data/${shanxiligong_id}`, method: 'put', data: shanxiligong_data });
}

// 管理端 - 删除就业数据
export function deleteData(shanxiligong_id) {
  return request({ url: `/api/admin/data/${shanxiligong_id}`, method: 'delete' });
}

// 管理端 - 分页查询就业数据
export function getAdminDataList(shanxiligong_params) {
  return request({ url: '/api/admin/data/list', method: 'get', params: shanxiligong_params });
}