test('not 匹配器', () => {
  const a = 1;
  expect(a).not.toBeFalsy();
});

test('toBeLessThan', () => {
  const a = 10;
  expect(a).toBeLessThan(33);
});

// 字符串
test('toMatch', () => {
  const str = 'https://baidu.com';
  expect(str).toMatch(/baidu/);
});

// 包含什么
test('toContain', () => {
  const arr = [1, 3, 4, 5];
  expect(arr).toContain(3);
});

// 处理异常
test('toThrow', () => {
//   expect(new Error()).toThorw();
});
