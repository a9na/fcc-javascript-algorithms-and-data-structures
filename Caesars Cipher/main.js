function rot13(str) {
  const regex = /[A-Z]/;

  let decodedStr = '';

  for (let i = 0; i < str.length; i++) {
    const charCode = str.charCodeAt(i);

    if (regex.test(str[i])) {
      let decodedCharCode = charCode + 13;

      if (decodedCharCode > 90) {
        decodedCharCode = decodedCharCode - 26;
      }
      decodedStr += String.fromCharCode(decodedCharCode);
    } else {
      decodedStr += str[i];
    }
  }

  return decodedStr;
}

rot13("SERR PBQR PNZC");
