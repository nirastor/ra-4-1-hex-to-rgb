export default function validateInput(text) {
  if (!text) {
    return {
      result: false,
      err: 'Введите hex. Например #ff33a5',
    };
  }

  if (text.length !== 7) {
    return {
      result: false,
      err: 'Жду 7 символов вместе с решеткой. Например #123456',
    };
  }

  if (text[0] !== '#') {
    return {
      result: false,
      err: 'Hex должен начинаться с символа #. Например #ff33a5',
    };
  }

  for (let i = 1; i < 7; i += 1) {
    if (text[i].search(/[0-9a-fA-F]/) === -1) {
      return {
        result: false,
        err: 'Hex может содержать только символы 0-9, a-f или A-F. Например #ab09ef',
      };
    }
  }

  return { result: true };
}
