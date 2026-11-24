import request from '@/utils/request';

// 获取地区树形数据
export function getRegionTree() {
  return request({ url: '/api/dict/region/tree', method: 'get' });
}

// 获取后台地区全量树
export function getRegionFullTree(shanxiligong_params) {
  return request({ url: '/api/admin/dict/region/tree', method: 'get', params: shanxiligong_params });
}

// 获取后台地区直接子级
export function getRegionChildren(shanxiligong_parentId) {
  return request({ url: '/api/admin/dict/region/children', method: 'get', params: { parentId: shanxiligong_parentId } });
}

// 获取行业列表
export function getIndustryList() {
  return request({ url: '/api/dict/industry/list', method: 'get' });
}

// 获取专业列表
export function getMajorList() {
  return request({ url: '/api/dict/major/list', method: 'get' });
}

// 新增地区
export function addRegion(shanxiligong_data) {
  return request({ url: '/api/admin/dict/region', method: 'post', data: shanxiligong_data });
}

// 修改地区
export function updateRegion(shanxiligong_id, shanxiligong_data) {
  return request({ url: `/api/admin/dict/region/${shanxiligong_id}`, method: 'put', data: shanxiligong_data });
}

// 删除地区
export function deleteRegion(shanxiligong_id) {
  return request({ url: `/api/admin/dict/region/${shanxiligong_id}`, method: 'delete' });
}

// 新增行业
export function addIndustry(shanxiligong_data) {
  return request({ url: '/api/admin/dict/industry', method: 'post', data: shanxiligong_data });
}

// 修改行业
export function updateIndustry(shanxiligong_id, shanxiligong_data) {
  return request({ url: `/api/admin/dict/industry/${shanxiligong_id}`, method: 'put', data: shanxiligong_data });
}

// 删除行业
export function deleteIndustry(shanxiligong_id) {
  return request({ url: `/api/admin/dict/industry/${shanxiligong_id}`, method: 'delete' });
}

// 新增专业
export function addMajor(shanxiligong_data) {
  return request({ url: '/api/admin/dict/major', method: 'post', data: shanxiligong_data });
}

// 修改专业
export function updateMajor(shanxiligong_id, shanxiligong_data) {
  return request({ url: `/api/admin/dict/major/${shanxiligong_id}`, method: 'put', data: shanxiligong_data });
}

// 删除专业
export function deleteMajor(shanxiligong_id) {
  return request({ url: `/api/admin/dict/major/${shanxiligong_id}`, method: 'delete' });
}