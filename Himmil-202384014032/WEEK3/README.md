# WEEK3 · Project initiation, requirements analysis, and front-end & back-end framework

> Employment in higher education institutions
> ID：202384014032　|　Progress：WEEK3
> Add New File：**29** 

## 1.What is this snapshot?

`WEEK3/` This is the **complete project snapshot at the end of WEEK3**: it includes all the source code, configurations, and documentation

## 2.Progress Overview

| Item | Value |
| --- | --- |
| New files today | 29 |
| Total source files | 29 |
| Backend REST APIs (total) | 0 |
| Frontend pages (total) | 0 |
| Backend build status | ✅ Passed |

## 3. Directory Structure

```text
WEEK3/
├─ back-end/                          Spring Boot 4 后端（Maven 工程）
│  ├─ src/main/java/org/example/backend/
│  │  ├─ BackEndApplication.java       Spring Boot 启动类
│  │  ├─ common/                      Result / PageResult / Constants
│  │  ├─ config/                      MyBatis-Plus 与 Redis 配置
│  │  ├─ exception/                   业务异常与全局异常处理
│  │  └─ util/                        JWT 与 BCrypt 工具
│  ├─ src/main/resources/application.yml    端口、数据源、Redis、MyBatis-Plus
│  ├─ src/test/java/org/example/backend/     上下文加载测试
│  ├─ .mvn/wrapper/                   Maven Wrapper 配置
│  └─ pom.xml                         Maven 依赖与构建配置
├─ front-end/                         Vue 2 + Element UI 前端（Vue CLI 5）
│  ├─ public/                         HTML 模板与站点图标
│  ├─ src/assets/                     站点 Logo
│  ├─ package.json / package-lock.json      依赖与依赖锁定
│  └─ vue.config.js                   开发服务器 8080，代理 /api、/uploads 到 8088
├─ WEEK3-工作日志.md                   本快照工作日志
├─ README.md                          本文件
└─ .gitignore                         依赖、构建产物、IDE、运行时目录
```

## 4. Running Mode

### 4.1 Environment Requirements

| Component | Version |
| --- | --- |
| JDK | 17 or above (project compiled with `--release 17`) |
| Maven | 3.9 (can use the project's own `mvnw` / `mvnw.cmd`) |
| MySQL | 8.0 |
| Redis | 6 |
| Node.js | 16 (only needed for the frontend) |

### 4.2 Backend

```bash
# First run: initialize the database (init.sql is GBK encoded, be sure to use --default-character-set=gbk)
mysql -uroot -p --default-character-set=gbk < back-end/src/main/resources/sql/init.sql

# Start Redis (needed for login brute-force protection and chart caching)
redis-server

# Start the backend, default port 8088
cd back-end
./mvnw spring-boot:run # Windows: mvnw.cmd spring-boot:run
```

The database address, username, password, and Redis address are all configured in `back-end/src/main/resources/application.yml`.

### 4.3 Frontend

The frontend in this snapshot only includes source files up to that day

