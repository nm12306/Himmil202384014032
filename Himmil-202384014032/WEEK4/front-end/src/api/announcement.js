import request from '@/utils/request';

// 公告列表
export function getAnnouncementList(shanxiligong_params) {
  return request({ url: '/api/announcement/list', method: 'get', params: shanxiligong_params });
}

// 公告详情
export function getAnnouncementDetail(shanxiligong_id) {
  return request({ url: `/api/announcement/${shanxiligong_id}`, method: 'get' });
}

// 最新公告
export function getLatestAnnouncements() {
  return request({ url: '/api/announcement/latest', method: 'get' });
}

// 管理端 - 发布公告
export function addAnnouncement(shanxiligong_data) {
  return request({ url: '/api/admin/announcement', method: 'post', data: shanxiligong_data });
}

// 管理端 - 编辑公告
export function updateAnnouncement(shanxiligong_id, shanxiligong_data) {
  return request({ url: `/api/admin/announcement/${shanxiligong_id}`, method: 'put', data: shanxiligong_data });
}

// 管理端 - 上架/下架公告
export function updateAnnouncementStatus(shanxiligong_id, shanxiligong_data) {
  return request({
    url: `/api/admin/announcement/${shanxiligong_id}/status`,
    method: 'put',
    data: shanxiligong_data
  });
}

// 管理端 - 删除公告
export function deleteAnnouncement(shanxiligong_id) {
  return request({ url: `/api/admin/announcement/${shanxiligong_id}`, method: 'delete' });
}

// 管理端 - 公告列表
export function getAdminAnnouncementList(shanxiligong_params) {
  return request({
    url: '/api/admin/announcement/list',
    method: 'get',
    params: shanxiligong_params
  });
}