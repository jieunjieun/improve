function strStr(hasStack, needle) {
  if (needle.length === 0) return 0;

  return hasStack.indexOf(needle);
}

strStr("hello", "ll");
strStr("aaaaa", "bba");
strStr("", "");