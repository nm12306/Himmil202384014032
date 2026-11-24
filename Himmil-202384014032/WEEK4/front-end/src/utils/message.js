import { Message } from 'element-ui';

function shanxiligong_openMessage(shanxiligong_type, shanxiligong_message, shanxiligong_options = {}) {
  const shanxiligong_payload = typeof shanxiligong_message === 'string' ? { message: shanxiligong_message } : shanxiligong_message || {};
  return Message({
    type: shanxiligong_type,
    showClose: true,
    duration: shanxiligong_type === 'error' ? 3200 : 2200,
    offset: 24,
    customClass: `app-message app-message--${shanxiligong_type}`,
    ...shanxiligong_payload,
    ...shanxiligong_options
  });
}

const shanxiligong_message = function (shanxiligong_options) {
  const shanxiligong_payload = typeof shanxiligong_options === 'string' ? { message: shanxiligong_options } : shanxiligong_options || {};
  const shanxiligong_type = shanxiligong_payload.type || 'info';
  return shanxiligong_openMessage(shanxiligong_type, shanxiligong_payload);
};

shanxiligong_message.success = function (shanxiligong_options) {
  return shanxiligong_openMessage('success', shanxiligong_options);
};

shanxiligong_message.warning = function (shanxiligong_options) {
  return shanxiligong_openMessage('warning', shanxiligong_options);
};

shanxiligong_message.info = function (shanxiligong_options) {
  return shanxiligong_openMessage('info', shanxiligong_options);
};

shanxiligong_message.error = function (shanxiligong_options) {
  return shanxiligong_openMessage('error', shanxiligong_options);
};

shanxiligong_message.closeAll = function () {
  Message.closeAll();
};

export default shanxiligong_message;