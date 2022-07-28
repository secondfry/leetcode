// Author: Rustam SecondFry Gubaydullin <secondfry+github@gmail.com>
// Runtime: 86 ms, faster than 91.19% of JavaScript online submissions for Valid Anagram.
// Memory Usage: 42.5 MB, less than 93.09% of JavaScript online submissions for Valid Anagram.

const isAnagram = function (s: string, t: string) {
  const a = Array(26).fill(0);
  const b = Array(26).fill(0);

  for (let i = 0; i < s.length; i++) {
    a[s.charCodeAt(i) - 97]++;
  }

  for (let i = 0; i < t.length; i++) {
    b[t.charCodeAt(i) - 97]++;
  }

  for (let i = 0; i < 26; i++) {
    if (a[i] !== b[i]) return false;
  }

  return true;
};

export default isAnagram;
