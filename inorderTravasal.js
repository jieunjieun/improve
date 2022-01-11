class TreeNode {
  constructor(item) {
    this.val = item;
    this.left = this.right = null;
  }
}

function inorderTravasal(root) {
  const stack = [];
  const result = [];

  while(root !== null || stack.length !== 0) {
    while (root !== null) {
      stack.push(root);
      root = root.left;
    }
    root = stack.pop();
    result.push(root.val)
    root = root.right;
  }

  return result.filter((v) => v !== null);
}


// 언제까지? 트리를 다 돌때따지

const root1 = new TreeNode(1);
root1.left = new TreeNode(null);
root1.right = new TreeNode(2);
root1.right.left = new TreeNode(3);

console.log(inorderTravasal(root1))