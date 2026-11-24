import request from '@/utils/request';

// 提交反馈
export function submitFeedback(shanxiligong_data) {
  return request({ url: '/api/feedback', method: 'post', data: shanxiligong_data });
}

// 我的反馈列表
export function getMyFeedbackList(shanxiligong_params) {
  return request({ url: '/api/feedback/my', method: 'get', params: shanxiligong_params });
}

// 管理端 - 反馈列表
export function getAdminFeedbackList(shanxiligong_params) {
  return request({ url: '/api/admin/feedback/list', method: 'get', params: shanxiligong_params });
}

// 管理端 - 反馈详情
export function getFeedbackDetail(shanxiligong_id) {
  return request({ url: `/api/admin/feedback/${shanxiligong_id}`, method: 'get' });
}

// 管理端 - 回复反馈
export function replyFeedback(shanxiligong_id, shanxiligong_data) {
  return request({ url: `/api/admin/feedback/${shanxiligong_id}/reply`, method: 'put', data: shanxiligong_data });
}