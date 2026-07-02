export function LINKTRACKER(word, callback) {
  const url = window.location.href;
  const expected = `${window.location.origin}?${word}`;
  if (url === expected) {
    callback();
  };
};