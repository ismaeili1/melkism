export interface MockUser {
  id: string;
  phone: string;
  passwordHash: string; // یا مقدار مستقیم جهت تست
  name: string;
  username: string;
  role: "USER" | "SUPER_ADMIN";
  avatar: string;
}

export const MOCK_USERS: MockUser[] = [
  {
    id: "test-user-1",
    phone: "+989049746417",
    passwordHash: "123456", // رمز عبور آزمایشی
    name: "کاربر آزمایشی",
    username: "test_user_904",
    role: "USER",
    avatar: "/images/melkism-logo-Mark.png",
  },
];