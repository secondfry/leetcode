// Author: Rustam SecondFry Gubaydullin <secondfry+github@gmail.com>
// Runtime: 161 ms, faster than 17.87% of JavaScript online submissions for Valid Anagram.
// Memory Usage: 46.4 MB, less than 33.71% of JavaScript online submissions for Valid Anagram.

const isAnagram = function (s: string, t: string) {
  const a = Array.from(s).sort();
  const b = Array.from(t).sort();

  if (a.length !== b.length) return false;

  for (let i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) return false;
  }

  return true;
};

export default isAnagram;
