function rot13(str) {
   //split string into array
   const strArr = str.split('')
   const regex = /[A-Z]/
   return strArr.map(char => {
      //test if each item is a letter
      //if letter shift it back 13 characters
      if (regex.test(char)) {
         const shiftedCode = char.charCodeAt(0) - 13
         const code = shiftedCode < 65 ? 26 + shiftedCode : shiftedCode
         return String.fromCharCode(code)
      } else {
         //if not letter pass on character
         return char
      }
   }).join('')
}

rot13("SERR PBQR PNZC");
