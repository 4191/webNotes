const USER_KEY = 'user_key';

/*
  保存user
   */
export const saveUser = (user) => {
    localStorage.setItem(USER_KEY, JSON.stringify(user));
};

/*
  读取user
   */
export const getUser = () => {
    return JSON.parse(localStorage.getItem(USER_KEY) || '{}');
};

/*
  删除user
   */
export const removeUser = () => {
    localStorage.removeItem(USER_KEY);
};
