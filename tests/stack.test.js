const stack = require('../src/stack');

test('peek on empty stack returns undefined', () => {
    expect(stack.peek()).toBeUndefined();
});

test('peek on stack with one element returns that element', () => {
    stack.push(1);
    expect(stack.peek()).toBeDefined();
    expect(stack.peek()).toBe(1);
});

test('peek on stack with two or more elements returns the top element', () => {
    stack.push(1);
    stack.push("wow");
    stack.push(42);
    expect(stack.peek()).toBeDefined();
    expect(stack.peek()).toBe(42);
});

test('adding 3 elements to empty stack and then removing them should result in an empty stack', () => {
  while(stack.peek() !== undefined) {
    stack.pop();
  }
  
  stack.push("hej");
  stack.push("tja");
  stack.push("tjena");
  stack.pop();
  stack.pop();
  stack.pop();
  expect(stack.peek()).toBeUndefined();
});