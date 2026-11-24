import request from '@/utils/request';

// 看板核心指标
export function getDashboard() {
  return request({ url: '/api/chart/dashboard', method: 'get' });
}

// 毕业生人数趋势
export function getGraduateTrend() {
  return request({ url: '/api/chart/graduate-trend', method: 'get' });
}

// 学历薪资对比
export function getSalaryByEducation() {
  return request({ url: '/api/chart/salary-by-education', method: 'get' });
}

// 行业分布
export function getIndustryDistribution() {
  return request({ url: '/api/chart/industry-distribution', method: 'get' });
}

// 薪资趋势
export function getSalaryTrend(shanxiligong_params) {
  return request({ url: '/api/chart/salary-trend', method: 'get', params: shanxiligong_params });
}

// 地区薪资地图
export function getSalaryMap() {
  return request({ url: '/api/chart/salary-map', method: 'get' });
}

// 专业对比
export function getMajorCompare(shanxiligong_params) {
  return request({ url: '/api/chart/major-compare', method: 'get', params: shanxiligong_params });
}

// 行业环形图
export function getIndustryRing() {
  return request({ url: '/api/chart/industry-ring', method: 'get' });
}