const add = (a, b) => a + b;

test('should be add two numbers', () => {
    const res = add(3, 5);
    expect(res).toBe(8);

})