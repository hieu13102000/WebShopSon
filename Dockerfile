# Sử dụng node.js phiên bản 14 trên hệ điều hành Alpine
FROM node:14.15.4-alpine AS builder

# Tạo thư mục làm việc
WORKDIR /app

# Sao chép các tệp package.json và package-lock.json vào thư mục làm việc
COPY package*.json ./

# Cài đặt các phụ thuộc của ứng dụng
RUN npm install

# Sao chép toàn bộ mã nguồn của ứng dụng vào thư mục làm việc
COPY . .

# Thiết lập biến môi trường để xác định cổng mà ứng dụng sẽ chạy
ENV PORT=80

# Xây dựng ứng dụng
RUN npm run build

# Tạo hình ảnh nginx mới
FROM nginx:1.20.1-alpine

# Sao chép các tệp xây dựng được tạo ra từ bước trước đó vào thư mục /usr/share/nginx/html
COPY --from=builder /app/dist/WebShopSon /usr/share/nginx/html

# Sao chép tệp cấu hình nginx của bạn vào container
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Thiết lập cổng mà nginx sẽ chạy
EXPOSE 80

# Chạy nginx
CMD ["nginx", "-g", "daemon off;"]





