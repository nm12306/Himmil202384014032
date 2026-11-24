# WEEK4 · Database Design and Persistence Layer: Schema, Entities and Mappers

> **Project**: employment in higher education institutions, Shaanxi University of Technology  
> **Student ID**: 202384014032 | **Progress**: WEEK4 | **Snapshot Directory**: `WEEK4/`

---

## 1. Today's Goals

1. Complete the database conceptual and physical model design, defining 10 tables together with their primary and foreign keys, indexes, and logical deletion fields.  
2. Produce a repeatable initialization script covering database creation, table creation, dictionary base data, and sample employment data.  
3. Write 10 entity classes (Lombok + MyBatis-Plus annotations) that correspond strictly to the table structures.  
4. Write 10 Mapper interfaces, and add XML dynamic SQL for multi-condition pagination and keyword-related queries.  
5. Complete the frontend data access layer: axios instance, authentication utilities, message prompts, 12 business API modules, and the Vuex skeleton.

## 2. Today's Progress

| No. | Module | Work Content | Completion Status |
| --- | --- | --- | --- |
| 1 | Database Design | Designed 10 tables: user, region dictionary, industry dictionary, major dictionary, employment data, favorite, announcement, feedback, operation log, query log | ✅ |
| 2 | Initialization Script | Wrote `init.sql`: database creation + 10 tables + dictionary data + sample data, allowing a full database rebuild | ✅ |
| 3 | Entity Layer | 10 `@TableName` entities whose fields map one-to-one to the tables, with unified `@TableLogic` logical deletion | ✅ |
| 4 | Mapper Layer | 10 `BaseMapper` interfaces; `EmploymentDataMapper` extended with multi-condition pagination and keyword queries | ✅ |
| 5 | Complex SQL | `EmploymentDataMapper.xml`: dynamic assembly of 6 conditions + three-table LEFT JOIN keyword search | ✅ |
| 6 | Frontend Request Wrapper | `utils/request.js`: axios instance, token injection, unified 401/403 handling, Blob passthrough | ✅ |
| 7 | Frontend Auth Utilities | `utils/auth.js`: token and user info storage for both user-side and admin-side contexts | ✅ |
| 8 | Frontend API Layer | 12 API modules (authentication, data, dictionary, chart, report, export, recommendation, favorite, announcement, feedback, user, admin) | ✅ |
| 9 | State and Messages | `store/index.js` skeleton and a unified message wrapper in `utils/message.js` | ✅ |

## 3. New Files Added Today (38 files)

| # | New File | Description |
| --- | --- | --- |
| 1 | `back-end/src/main/java/org/example/backend/entity/Announcement.java` | Entity class Announcement (MyBatis-Plus @TableName + logical deletion) |
| 2 | `back-end/src/main/java/org/example/backend/entity/DictIndustry.java` | Entity class DictIndustry (MyBatis-Plus @TableName + logical deletion) |
| 3 | `back-end/src/main/java/org/example/backend/entity/DictMajor.java` | Entity class DictMajor (MyBatis-Plus @TableName + logical deletion) |
| 4 | `back-end/src/main/java/org/example/backend/entity/DictRegion.java` | Entity class DictRegion (MyBatis-Plus @TableName + logical deletion) |
| 5 | `back-end/src/main/java/org/example/backend/entity/EmploymentData.java` | Entity class EmploymentData (MyBatis-Plus @TableName + logical deletion) |
| 6 | `back-end/src/main/java/org/example/backend/entity/Feedback.java` | Entity class Feedback (MyBatis-Plus @TableName + logical deletion) |
| 7 | `back-end/src/main/java/org/example/backend/entity/OperationLog.java` | Entity class OperationLog (MyBatis-Plus @TableName + logical deletion) |
| 8 | `back-end/src/main/java/org/example/backend/entity/QueryLog.java` | Entity class QueryLog (MyBatis-Plus @TableName + logical deletion) |
| 9 | `back-end/src/main/java/org/example/backend/entity/User.java` | Entity class User (MyBatis-Plus @TableName + logical deletion) |
| 10 | `back-end/src/main/java/org/example/backend/entity/UserFavorite.java` | Entity class UserFavorite (MyBatis-Plus @TableName + logical deletion) |
| 11 | `back-end/src/main/java/org/example/backend/mapper/AnnouncementMapper.java` | Mapper interface AnnouncementMapper (extends BaseMapper) |
| 12 | `back-end/src/main/java/org/example/backend/mapper/DictIndustryMapper.java` | Mapper interface DictIndustryMapper (extends BaseMapper) |
| 13 | `back-end/src/main/java/org/example/backend/mapper/DictMajorMapper.java` | Mapper interface DictMajorMapper (extends BaseMapper) |
| 14 | `back-end/src/main/java/org/example/backend/mapper/DictRegionMapper.java` | Mapper interface DictRegionMapper (extends BaseMapper) |
| 15 | `back-end/src/main/java/org/example/backend/mapper/EmploymentDataMapper.java` | Mapper interface EmploymentDataMapper (extends BaseMapper) |
| 16 | `back-end/src/main/java/org/example/backend/mapper/FeedbackMapper.java` | Mapper interface FeedbackMapper (extends BaseMapper) |
| 17 | `back-end/src/main/java/org/example/backend/mapper/OperationLogMapper.java` | Mapper interface OperationLogMapper (extends BaseMapper) |
| 18 | `back-end/src/main/java/org/example/backend/mapper/QueryLogMapper.java` | Mapper interface QueryLogMapper (extends BaseMapper) |
| 19 | `back-end/src/main/java/org/example/backend/mapper/UserFavoriteMapper.java` | Mapper interface UserFavoriteMapper (extends BaseMapper) |
| 20 | `back-end/src/main/java/org/example/backend/mapper/UserMapper.java` | Mapper interface UserMapper (extends BaseMapper) |
| 21 | `back-end/src/main/resources/mapper/EmploymentDataMapper.xml` | Mapper XML: six-dimension dynamic pagination + three-table keyword join query |
| 22 | `back-end/src/main/resources/sql/init.sql` | Database and table creation plus initialization data script (10 tables, 44,000 region dictionary rows) |
| 23 | `front-end/src/api/admin.js` | API wrapper: admin overview |
| 24 | `front-end/src/api/announcement.js` | API wrapper: announcements |
| 25 | `front-end/src/api/auth.js` | API wrapper: authentication |
| 26 | `front-end/src/api/chart.js` | API wrapper: charts |
| 27 | `front-end/src/api/data.js` | API wrapper: employment data |
| 28 | `front-end/src/api/dict.js` | API wrapper: dictionaries |
| 29 | `front-end/src/api/export.js` | API wrapper: export |
| 30 | `front-end/src/api/favorite.js` | API wrapper: favorites |
| 31 | `front-end/src/api/feedback.js` | API wrapper: feedback |
| 32 | `front-end/src/api/recommend.js` | API wrapper: recommendations |
| 33 | `front-end/src/api/report.js` | API wrapper: reports |
| 34 | `front-end/src/api/user.js` | API wrapper: users |
| 35 | `front-end/src/store/index.js` | Vuex store skeleton |
| 36 | `front-end/src/utils/auth.js` | Login state storage utility (user-side / admin-side dual context) |
| 37 | `front-end/src/utils/message.js` | Global message wrapper |
| 38 | `front-end/src/utils/request.js` | axios instance: token injection, unified 401/403 handling, Blob passthrough |

> After the additions today, the `WEEK4/` snapshot contains **67** source files in total (excluding the three documentation files: README.md, the work log, and .gitignore).


## 4. Key Implementation Notes

### 4.1 Table Structure Design

| Table Name | Description | Key Fields |
| --- | --- | --- |
| `shanxiligong_sys_user` | Users (student / admin) | `username` (unique), `password` (BCrypt), `nickname`, `email`, `phone`, `avatar`, `role` (0 student / 1 admin), `status` (0 disabled / 1 normal), `last_login_time`, `deleted` |
| `shanxiligong_dict_region` | Region dictionary (four levels: province / city / district / township) | `name`, `parent_id` (0 is the provincial root), `code` (administrative division code, unique), `level`, `sort_order` |
| `shanxiligong_dict_industry` | Industry dictionary | `name` (unique), `sort_order` |
| `shanxiligong_dict_major` | Major dictionary | `name` (unique), `sort_order` |
| `shanxiligong_employment_data` | Employment data (core fact table) | `region_id`, `province_id`, `industry_id`, `major_id`, `education`, `year`, `avg_salary`, `median_salary`, `employment_rate`, `sample_size` |
| `shanxiligong_user_favorite` | User favorites | `user_id`, `data_id`, `create_time` |
| `shanxiligong_announcement` | Announcements | `title`, `summary`, `content`, `status`, `publisher_id`, `publish_time` |
| `shanxiligong_feedback` | Message feedback | `user_id`, `title`, `content`, `type`, `status`, `reply_content`, `reply_user_id`, `reply_time` |
| `shanxiligong_operation_log` | Operation log | `operator_id`, `operator_name`, `operation_type`, `operation_target`, `operation_detail`, `ip_address` |
| `shanxiligong_query_log` | Query log (behavior tracking) | `user_id`, `query_type`, `query_params`, `create_time` |

Design points:

- All tables uniformly use an `id BIGINT AUTO_INCREMENT` primary key, `create_time` (default `CURRENT_TIMESTAMP`), and a `deleted` logical deletion flag;
- Dictionary tables define named unique keys (`uk_name` / `uk_code`) to prevent duplicate entries;
- The fact table redundantly stores both `province_id` and `region_id`, so that "aggregation by province" does not need recursive joins back to the region table;
- The character set is uniformly `utf8mb4` with collation `utf8mb4_general_ci`, keeping Chinese text and emoji safe.

### 4.2 Initialization Script `init.sql`

Script structure: `CREATE DATABASE` → `USE` → `SET NAMES utf8mb4` → per-table `DROP TABLE IF EXISTS` + `CREATE TABLE` → batch `INSERT` → `SET FOREIGN_KEY_CHECKS = 1`.

Built-in data volume:

| Data | Rows (approx.) | Purpose |
| --- | --- | --- |
| Region dictionary | 44,689 | Covers province / city / district / township, supporting three-level cascading and the "salary map" |
| Industry dictionary | 18 | Industry dropdown and industry distribution chart |
| Major dictionary | 32 | Major filtering and major comparison |
| Employment data | 279 | Samples for charts, reports, recommendations, and import deduplication checks |
| Users | 11 | 1 admin (`admin`) + 10 student accounts |
| Announcements | 3 | Homepage announcements and announcement details |

The script is saved in GBK encoding, so the character set must be specified explicitly during import (see Section 6); otherwise the Chinese comments and data will be garbled.

### 4.3 Entity Classes

- Use Lombok `@Data / @NoArgsConstructor / @AllArgsConstructor` to reduce boilerplate code;
- `@TableName` explicitly declares the table name, avoiding differences caused by relying on automatic underscore-to-camel-case mapping;
- `@TableId(type = IdType.AUTO)` corresponds to the auto-increment primary key;
- The `deleted` field is annotated with `@TableLogic`, which together with the global configuration implements "automatic filtering on queries and update-instead-of-delete on deletion";
- Amounts and rates uniformly use `BigDecimal` to avoid `double` precision errors affecting statistical results.

### 4.4 Mappers and Dynamic SQL

`EmploymentDataMapper` adds two methods beyond `BaseMapper`:

1. `selectByConditions`: pagination over combinations of six conditions — province, region, industry, major, education, and year; a condition is not appended when it is `null`;
2. `selectAdminList`: fuzzy keyword matching against region name, industry name, major name, and education, implemented through `LEFT JOIN` on the three dictionary tables — otherwise the admin side could only search by ID, which is a poor experience.

The XML uniformly includes the `deleted = 0` condition and orders by `year DESC, id DESC`, ensuring the latest year comes first.

### 4.5 Frontend Request Layer

`utils/request.js` does three things:

- **Request interceptor**: retrieves the token for the current "admin side / user side" context and injects `Authorization: Bearer <token>`;
- **Response interceptor**: returns directly when `code === 200`; on `401` clears the login state and redirects back to the login page; on `403` reports insufficient permission; other cases show an error popup and throw an error marked with `__handled`, avoiding duplicate popups on the page;
- **File download**: returns the binary directly when `responseType === 'blob'`, for Excel / PDF export.

`utils/auth.js` stores tokens for the user side and the admin side under the `ruitu_auth:<context>:token` prefix respectively, and stays compatible with the legacy `token` / `userInfo` keys so that upgrading does not force users to log in again.

The `api/` directory is split into 12 modules by business domain; pages only reference module functions and never write URLs directly, so changing an interface path later requires only one edit.

## 5. API / Page Progress

| Type | Added Today | Total |
| --- | --- | --- |
| Database Tables | 10 | 10 |
| Backend Entities / Mappers | 10 / 10 | 10 / 10 |
| Frontend API Modules | 12 | 12 |
| Backend REST API | 0 | 0 |


## 6. How to Run This Snapshot

```bash
# Environment requirements: JDK 17+, MySQL 8, Redis 6+ (authentication is not integrated yet, but the project already reads the datasource config)

# 1) Initialize the database (GBK encoded; the charset parameter is mandatory)
mysql -uroot -p --default-character-set=gbk < back-end/src/main/resources/sql/init.sql

# 2) Start the backend
cd back-end
./mvnw spring-boot:run        # Windows: mvnw.cmd spring-boot:run

# 3) The frontend has no entry file yet; only the API and utility layers were committed, so it cannot be built standalone
```

> The database account, password, and database name are configured in `back-end/src/main/resources/application.yml`. If this snapshot is to be published to GitHub, replace the database password in that file with a placeholder value or switch to environment variables first.
