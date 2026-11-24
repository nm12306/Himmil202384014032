import request from '@/utils/request';

// 导出Excel
export function exportExcel(shanxiligong_params) {
  return request({
    url: '/api/export/excel',
    method: 'get',
    params: shanxiligong_params,
    responseType: 'blob'
  });
}