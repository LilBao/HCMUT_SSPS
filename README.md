# HCMUT_SSPS

# Cấu trúc thư mục backend dự án SPSS

## Thư mục gốc `java`
* **`com.main.spss`:** Gói chứa toàn bộ logic của ứng dụng.
  * **`api`:** Có thể chứa các controller hoặc các lớp liên quan đến giao tiếp với các hệ thống bên ngoài.
  * **`config`:** Chứa các cấu hình của ứng dụng, ví dụ như kết nối cơ sở dữ liệu, các tham số hệ thống.
  * **`dto`:** Chứa các đối tượng Data Transfer Object, dùng để truyền dữ liệu giữa các tầng của ứng dụng.
  * **`embedded`:** Có thể chứa các đối tượng được nhúng (embedded) trong các entity khác.
  * **`entity`:** Chứa các đối tượng đại diện cho các bảng trong cơ sở dữ liệu.
  * **`enums`:** Chứa các enum (liệt kê) dùng để định nghĩa các giá trị cố định.
  * **`mapper`:** Chứa các mapper để ánh xạ giữa các đối tượng (ví dụ: entity và DTO).
  * **`payload`:** Có thể chứa các đối tượng đại diện cho payload trong các yêu cầu/phản hồi của API.
  * **`repository`:** Chứa các interface tương tác với cơ sở dữ liệu (thường sử dụng với các framework ORM như Hibernate, JPA).
  * **`security`:** Chứa các lớp liên quan đến bảo mật của ứng dụng, như authentication, authorization.
  * **`service`:** Chứa các lớp chứa logic nghiệp vụ của ứng dụng.
  * **`utils`:** Chứa các lớp utility cung cấp các hàm hỗ trợ chung.
  * **`SpssApplication`:** Điểm vào của ứng dụng Spring Boot.
* **`resources`:** Chứa các tài nguyên tĩnh của ứng dụng.
  * **`static`:** Chứa các tài nguyên tĩnh như CSS, JavaScript, hình ảnh.
  * **`templates`:** Chứa các template dùng để render giao diện người dùng (nếu ứng dụng có giao diện web).
* **`application.properties`:** File cấu hình chính của ứng dụng Spring Boot.
* **`test`:** Thư mục chứa các test case.

# Hướng Dẫn Chạy Dự Án

1. **Tạo cơ sở dữ liệu** với tên `hcmut_spss`
   - Mở MySQL và tạo cơ sở dữ liệu mới:
     ```sql
     CREATE DATABASE hcmut_spss;
     ```

2. **Sửa lại các thông tin máy cá nhân** trong file `application.properties`
   - Mở file `application.properties` và chỉnh sửa các thông tin kết nối cơ sở dữ liệu (như username, password, host, port) sao cho phù hợp với cấu hình máy của bạn.

3. **Chèn dữ liệu mẫu** vào MySQL
   - Sử dụng câu lệnh SQL để chèn dữ liệu mẫu vào cơ sở dữ liệu ():
     ```INSERT INTO tbl_spss_user (account_balance, is_enabled, created_at, expire_code_at, modified_at, created_by, email, modified_by, name, page_balance, password, token, user_id)
        VALUES (NULL, '1', NULL, NULL, NULL, NULL, 'a@hcmut.edu.vn', NULL, NULL, NULL, '$2a$12$1a3gjfPY/hJPOOCesAT3pu151TyftwQlEwdA9Efa0nKdwcNlfBn3y', 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJiYW9AaGNtdXQuZWR1LnZuIiwicm9sZSI6W3siYXV0aG9yaXR5IjoiU1RVREVOVCJ9LHsiYXV0aG9yaXR5IjoiU1BTTyJ9XSwiaWQiOiIyNDMzMDM3IiwiaXNFbmFibGVkIjp0cnVlLCJpYXQiOjE3MzIwNzg3MDEsImV4cCI6MTczMjE2NTEwMX0.E62zksgy2fLsoG1dhmdeO-Jdy93Z4xXGVtLG0Wg9H-R6krxYGXzVCwFlcKQDZiauSoPkRLubgOCqHgqKdFMWog', '2433037');

        INSERT INTO tbl__role (id,name)
        VALUES (1,'ROLE_STUDENT'), (2, 'ROLE_SPSO');

        INSERT INTO tbl_user_role (role_id, user_id)
        VALUES (1, '2433037') , (2, '2433037')
     ```

4. **Kiểm tra API với Postman**
   - Mở Postman và gửi các yêu cầu (requests) tới các API endpoints của dự án để kiểm tra tính năng hoạt động của hệ thống.
   - Đảm bảo rằng server của bạn đang chạy trước khi gửi yêu cầu.
   - Example api/login
    {
        "email" : "a@hcmut.edu.vn",
        "password": 123
    }
