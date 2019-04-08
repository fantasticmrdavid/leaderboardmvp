export default [
  {
    id: 1,
    type: 'referee',
    username: 'ref1',
    password: 'sisu',
  },
  {
    id: 2,
    type: 'referee',
    username: 'ref2',
    password: 'sisu',
  },
  {
    id: 3,
    type: 'subscriber',
    username: 'sub1',
    password: 'sisu',
    access: [
      'b2',
      'b3',
    ],
  },
  {
    id: 4,
    type: 'subscriber',
    username: 'sub2',
    password: 'sisu',
    access: [
      'b4',
    ],
  },
  {
    id: 5,
    type: 'subscriber',
    username: 'sub3',
    password: 'sisu',
    access: [
      'b1',
      'b3',
      'b4',
    ],
  },
];
