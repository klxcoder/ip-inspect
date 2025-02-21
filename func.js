function getRandomColor() {
  return '#' + Math.floor(Math.random() * 0xffffff).toString(16);
}

const ipHexFn = (ipHex) => {
  return ipHex.replace(/[^0-9A-Fa-f]/g, '').toUpperCase();
};

function hexToBinary(hex) {
  if (!hex) return '';
  return hex
    .match(/.{1}/g) // Split each hex digit
    .map(h => parseInt(h, 16).toString(2).padStart(4, '0')) // Convert to binary and pad
    .join('');
}

const binaryToDecimal = (binary) => {
  return parseInt(binary, 2);
};

function binaryToIP(binaryStr) {
  if (binaryStr.length !== 32) {
    throw new Error("Binary string must be exactly 32 bits long");
  }

  const octets = binaryStr.match(/.{8}/g).map(b => parseInt(b, 2));
  return octets.join(".");
}
