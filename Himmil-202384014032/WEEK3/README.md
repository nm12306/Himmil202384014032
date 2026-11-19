# WEEK3 · Project initiation, requirements analysis, and front-end & back-end framework

> Employment in higher education institutions
> ID：202384014032　|　Progress：1/9
> Add New File：**29** 

## 1.What is this snapshot?

`WEEK3/` This is the **complete project snapshot at the end of Day 1**: it includes all the source code, configurations, and documentation

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
├─ back-end/                  Spring Boot 4 后端（Maven 工程）
│  ├─ src/main/java/org/example/backend/
│  │  ├─ controller/           REST 控制器
│  │  ├─ service/ + impl/      业务接口与实现
│  │  ├─ mapper/               MyBatis-Plus Mapper
│  │  ├─ entity/ dto/ vo/      数据模型
│  │  ├─ config/ interceptor/ filter/ aspect/   基础设施
│  │  └─ common/ util/ exception/ annotation/   公共能力
│  ├─ src/main/resources/
│  │  ├─ application.yml       端口、数据源、Redis、MyBatis-Plus 配置
│  │  ├─ mapper/*.xml          复杂 SQL
│  │  └─ sql/init.sql          建库建表与初始化数据
│  └─ pom.xml
├─ front-end/                 Vue 2 + Element UI 前端（Vue CLI 5）
│  ├─ src/api/                接口封装
│  ├─ src/views/user|admin/   用户端 / 管理端页面
│  ├─ src/layout/             布局组件
│  ├─ src/router/             
│  └─ package.json
├─ import-test-fixtures/      Excel 导入模板夹具（第 8 天加入）
├─ WEEK3-工作日志.md      本日工作日志（与根目录文档一一对应）
├─ README.md                  本文件
└─ .gitignore                 依赖、构建产物、IDE、运行时上传目录
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

