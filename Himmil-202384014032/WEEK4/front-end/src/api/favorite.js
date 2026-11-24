import request from '@/utils/request';

// 收藏/取消收藏
export function toggleFavorite(shanxiligong_dataId) {
  return request({ url: `/api/favorite/${shanxiligong_dataId}`, method: 'post' });
}

// 我的收藏列表
export function getFavoriteList(shanxiligong_params) {
  return request({ url: '/api/favorite/list', method: 'get', params: shanxiligong_params });
}

// 已收藏数据ID列表
export function getFavoriteIds() {
  return request({ url: '/api/favorite/ids', method: 'get' });
}