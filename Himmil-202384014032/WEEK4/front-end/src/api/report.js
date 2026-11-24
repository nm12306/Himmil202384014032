import request from '@/utils/request';

// 生成报告
export function generateReport(shanxiligong_data) {
  return request({ url: '/api/report/generate', method: 'post', data: shanxiligong_data });
}

// 导出PDF报告
export function exportReportPdf(shanxiligong_data) {
  return request({
    url: '/api/report/export-pdf',
    method: 'post',
    data: shanxiligong_data,
    responseType: 'blob'
  });
}