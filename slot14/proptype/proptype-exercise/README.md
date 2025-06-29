# PropTypes Demo Application

Ứng dụng demo về việc sử dụng PropTypes trong React để validate dữ liệu.

## Mô tả

Ứng dụng này bao gồm 4 ví dụ chính về việc sử dụng PropTypes:

1. **Ví dụ 1: UserProfile** - Component đơn giản với PropTypes validation
2. **Ví dụ 2: UserProfile2** - Form với React Bootstrap và validation nâng cao
3. **Ví dụ 3: MyForm** - Form sử dụng useReducer và PropTypes
4. **Exercise 19: ValidationForm** - Form với validation toàn diện

## Cài đặt

```bash
# Cài đặt dependencies
npm install

# Chạy ứng dụng
npm start
```

## Cấu trúc dự án

```
src/
├── components/
│   ├── UserProfile.js      # Ví dụ 1: Component đơn giản
│   ├── UserProfile2.js     # Ví dụ 2: Form với React Bootstrap
│   ├── MyForm.js          # Ví dụ 3: Form với useReducer
│   └── ValidationForm.js  # Exercise 19: Validation toàn diện
├── App.js                 # Component chính
└── index.js              # Entry point
```

## Các tính năng

### Ví dụ 1: UserProfile
- PropTypes validation cho `name` (string, required)
- PropTypes validation cho `age` (string/number, required)
- Hiển thị thông báo lỗi khi dữ liệu không hợp lệ

### Ví dụ 2: UserProfile2
- Form sử dụng React Bootstrap
- Validation real-time
- PropTypes cho `name`, `age`, và `onSubmit` function
- Kiểm tra tuổi từ 18-100

### Ví dụ 3: MyForm
- Sử dụng useReducer để quản lý state
- Form với validation
- PropTypes cho `title` và `onSubmit`
- Alert hiển thị lỗi

### Exercise 19: ValidationForm
- Validation toàn diện:
  - Tên: 3-50 ký tự
  - Tuổi: 18-100
  - Email: đúng định dạng
  - Số điện thoại: 10-15 chữ số
  - Đồng ý điều khoản
- Giao diện responsive với Bootstrap Grid
- Thông báo lỗi chi tiết

## Cách sử dụng

1. Chạy ứng dụng: `npm start`
2. Mở trình duyệt tại `http://localhost:3000`
3. Chuyển đổi giữa các tab để xem các ví dụ khác nhau
4. Thử nhập dữ liệu hợp lệ và không hợp lệ để xem validation hoạt động

## Dependencies

- `react`: ^18.2.0
- `react-dom`: ^18.2.0
- `prop-types`: ^15.8.1
- `react-bootstrap`: ^2.8.0
- `bootstrap`: ^5.3.0

## PropTypes được sử dụng

- `PropTypes.string.isRequired` - Chuỗi bắt buộc
- `PropTypes.number` - Số
- `PropTypes.oneOfType([PropTypes.string, PropTypes.number])` - Có thể là chuỗi hoặc số
- `PropTypes.func.isRequired` - Function bắt buộc

## Tác giả

By Traltb@fe.edu.vn 