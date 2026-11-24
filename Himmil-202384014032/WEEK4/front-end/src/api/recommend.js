import request from '@/utils/request';

// 获取专业推荐列表
export function getRecommendList(shanxiligong_params) {
  return request({ url: '/api/recommend/list', method: 'get', params: shanxiligong_params });
}