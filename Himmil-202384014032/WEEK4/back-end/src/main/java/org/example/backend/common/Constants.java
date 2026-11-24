package org.example.backend.common;

// 系统常量
public class Constants {

    private Constants() {}

    // 状态码
    public static final int CODE_SUCCESS = 200;
    public static final int CODE_BAD_REQUEST = 400;
    public static final int CODE_UNAUTHORIZED = 401;
    public static final int CODE_FORBIDDEN = 403;
    public static final int CODE_SERVER_ERROR = 500;

    // 提示信息
    public static final String MSG_SUCCESS = "操作成功";
    public static final String MSG_SERVER_ERROR = "服务器内部错误，请稍后重试";

    // JWT配置
    public static final String JWT_HEADER = "Authorization";
    public static final String JWT_PREFIX = "Bearer ";
    public static final String JWT_SECRET = "RuiTuEmploymentAnalysisPlatformSecretKey2026";
    public static final long JWT_EXPIRATION = 24 * 60 * 60 * 1000L;

    // 分页默认值
    public static final int PAGE_SIZE_DATA = 20;
    public static final int PAGE_SIZE_USER = 15;
    public static final int PAGE_SIZE_FAVORITE = 10;
    public static final int PAGE_SIZE_ANNOUNCEMENT = 10;
    public static final int PAGE_SIZE_FEEDBACK = 10;
    public static final int PAGE_SIZE_FEEDBACK_ADMIN = 15;
    public static final int PAGE_SIZE_LOG = 20;

    // 重置密码默认值
    public static final String DEFAULT_PASSWORD = "admin123";

    // Redis缓存key
    public static final String REDIS_LOGIN_FAIL = "login:fail:";
    public static final String REDIS_LOGIN_LOCK = "login:lock:";
    public static final String REDIS_DASHBOARD_STATS = "dashboard:stats";
    public static final String REDIS_DASHBOARD_CHARTS = "dashboard:charts:";
    public static final String REDIS_ADMIN_DASHBOARD = "admin:dashboard:stats";
    public static final String REDIS_DICT_REGION = "dict:region:tree";
    public static final String REDIS_DICT_REGION_FULL = "dict:region:tree:full";
    public static final String REDIS_DICT_INDUSTRY = "dict:industry:list";
    public static final String REDIS_DICT_MAJOR = "dict:major:list";

    // 文件上传
    public static final long AVATAR_MAX_SIZE = 2 * 1024 * 1024L;
    public static final String[] AVATAR_ALLOWED_TYPES = {"image/jpeg", "image/png"};
    public static final int EXPORT_MAX_ROWS = 5000;
    public static final int IMPORT_MAX_ROWS = 1000;
}
