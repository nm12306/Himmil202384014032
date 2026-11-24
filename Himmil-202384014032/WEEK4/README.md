# WEEK4 · Database design and persistence layer: schema script, entities and mappers

> Employment in higher education institutions
> ID：202384014032　|　Progress：WEEK4
> Add New File：**38**

## 1.What is this snapshot?

`WEEK4/` This is the **complete project snapshot at the end of WEEK4**: it includes all the source code,
configurations, and documentation accumulated up to this milestone.

## 2.Progress Overview

| Item | Value |
| --- | --- |
| New files today | 38 |
| Total source files | 67 |
| Backend REST APIs (total) | 0 |
| Frontend pages (total) | 0 |
| Backend build status | ✅ Passed |

## 3. Directory Structure

```text
WEEK4/
├─ back-end/                            Spring Boot 4 backend (Maven project)
│  ├─ src/main/java/org/example/backend/
│  │  ├─ BackEndApplication.java        Spring Boot application class
│  │  ├─ common/                        Result / PageResult / Constants
│  │  ├─ config/                        MyBatis-Plus and Redis configuration
│  │  ├─ exception/                     Business exception and global handler
│  │  ├─ util/                          JWT and BCrypt utilities
│  │  ├─ entity/                        Entity classes (MyBatis-Plus)
│  │  └─ mapper/                        Mapper interfaces (BaseMapper)
│  ├─ src/main/resources/
│  │  ├─ application.yml                Port, datasource, Redis, MyBatis-Plus
│  │  ├─ mapper/                        Mapper XML (dynamic SQL)
│  │  └─ sql/                           Schema and seed data (10 tables)
│  ├─ src/test/java/org/example/backend/  Context load test
│  └─ pom.xml                           Maven dependencies and build configuration
├─ front-end/                           Vue 2 + Element UI frontend (Vue CLI 5)
│  ├─ public/                           HTML template and favicon
│  ├─ src/api/                          API modules (axios)
│  ├─ src/assets/                       Site logo
│  ├─ src/store/                        Vuex store
│  ├─ src/utils/                        Request, auth and message helpers
│  ├─ package.json                      Dependencies and npm scripts
│  ├─ package-lock.json                 Locked dependency tree
│  └─ vue.config.js                     Dev server and /api, /uploads proxy
├─ WEEK4-Work-Log.md                        Daily work log
├─ README.md                            This file
└─ .gitignore                           Dependencies, build output, IDE and runtime folders
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

The frontend in this snapshot only includes the source files added up to this milestone. The entry point (`main.js`), root component (`App.vue`) and router table (`router/index.js`) are assembled in WEEK11, so the frontend cannot be started standalone here; use the `WEEK11/front-end` folder for a runnable frontend.
