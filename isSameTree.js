class TreeNode {
  constructor(item) {
    this.val = item;
    this.left = this.right = null;
  }
}

function isSameTree(p, q) {
  if (!p && !q) return true;
  if (!(p && q)) return false;
  if (p.val !== q.val) return false;
  return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
}

const p1 = new TreeNode(1);
p1.left = new TreeNode(2);
p1.right = new TreeNode(3)

const q1 = new TreeNode(1);
q1.left = new TreeNode(2);
q1.right = new TreeNode(3)

console.log(isSameTree(p1, q1))

const p2 = new TreeNode(null);
p2.left = new TreeNode(2);
p2.right = new TreeNode(null);

const q2 = new TreeNode(null);
q2.left = new TreeNode(null);
q2.right = new TreeNode(2);

console.log(isSameTree(p2, q2))