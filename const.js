const EXAMPLE_IP_HEX = '4500003C660440004006D6B57F0000017F000001';

const FIELDS = [
  {
    title: 'Version',
    length: 4,
    description: 'The version of the protocol',
    valueFn: binaryToDecimal,
  },
  {
    title: 'Header Length',
    length: 4,
    description: 'The length of the header in 32-bit words',
    valueFn: binaryToDecimal,
  },
  {
    title: 'Type of Service',
    length: 8,
    description: 'The type of service',
    valueFn: binaryToDecimal,
  },
  {
    title: 'Total Length',
    length: 16,
    description: 'The total length of the packet in bytes',
    valueFn: binaryToDecimal,
  },
  {
    title: 'Identification',
    length: 16,
    description: 'The unique identifier of the packet',
    valueFn: binaryToDecimal,
  },
  {
    title: 'Flags',
    length: 3,
    description: 'The flags of the packet',
    valueFn: binaryToDecimal,
  },
  {
    title: 'Fragment Offset',
    length: 13,
    description: 'The fragment offset of the packet',
    valueFn: binaryToDecimal,
  },
  {
    title: 'Time to Live',
    length: 8,
    description: 'The time to live of the packet',
    valueFn: binaryToDecimal,
  },
  {
    title: 'Protocol',
    length: 8,
    description: 'The protocol of the packet',
    valueFn: binaryToDecimal,
  },
  {
    title: 'Header Checksum',
    length: 16,
    description: 'The checksum of the packet',
    valueFn: () => { },
  },
  {
    title: 'Source Address',
    length: 32,
    description: 'The source address of the packet',
    valueFn: binaryToIP,
  },
  {
    title: 'Destination Address',
    length: 32,
    description: 'The destination address of the packet',
    valueFn: binaryToIP,
  },
];
