import request from '@/utils/request';

// 核心运营指标
export function getDashboardStats() {
  return request({ url: '/api/admin/dashboard/stats', method: 'get' });
}

// 访问量趋势
export function getVisitTrend() {
  return request({ url: '/api/admin/dashboard/visit-trend', method: 'get' });
}

// 查询量趋势
export function getQueryTrend() {
  return request({ url: '/api/admin/dashboard/query-trend', method: 'get' });
}

// 待处理反馈
export function getPendingFeedback() {
  return request({ url: '/api/admin/dashboard/pending-feedback', method: 'get' });
}

// 查询热度排行
export function getHotRank() {
  return request({ url: '/api/admin/dashboard/hot-rank', method: 'get' });
}

// 日志列表
export function getLogList(shanxiligong_params) {
  return request({ url: '/api/admin/log/list', method: 'get', params: shanxiligong_params });
}

// 上传Excel导入
export function uploadImportFile(shanxiligong_file) {
  const shanxiligong_formData = new FormData();
  shanxiligong_formData.append('file', shanxiligong_file);
  return request({
    url: '/api/admin/import/upload',
    method: 'post',
    data: shanxiligong_formData,
    headers: { 'Content-Type': 'multipart/form-data' }
  });
}

// 下载导入模板
export function downloadImportTemplate() {
  return request({
    url: '/api/admin/import/template',
    method: 'get',
    responseType: 'blob'
  });
}