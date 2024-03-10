/**
 * Functional program where we don't change inputs directly
 * Don't mutate them
 * use pipelines, curring and closures
 * Where state are not change
 */
const receipts = [
  { id: 1, total: 32, name: "somename" },
  { id: 2, total: 25, name: "somename2" },
  { id: 3, total: 13, name: "somename3" },
  { id: 3, total: 23, name: "somename3_3" },
  { id: 3, total: 90, name: "somename3_3_3" },
  { id: 3, total: 19, name: "somename3_3_3_3" },
  { id: 4, total: 22, name: "somename4" },
];

function processReceipts(start, receipts) {
  processReceipt(start, receipts);
}

function processReceipt(index, receipts) {
  if (index < receipts.length) {
    const receipt = receipts[index];
    console.log(receipt);
    const nextIndex = index + 1;
    processReceipt(nextIndex, receipts);
  }
}

//

function userIdEquals(userId) {
  return (receipt) => {
    //closure
    return receipt.id == userId;
  };
}

function filter(index, receipts, condition) {
  if (index < receipts.length) {
    const filterUserList = filter(index + 1, receipts, condition);
    const receipt = receipts[index];
    if (condition(receipt)) {
      return [receipt].concat(filterUserList);
    }
    return filterUserList;
  }
  return [];
}

function MyMap(receipts, transform, index = 0) {
  if (index < receipts.length) {
    const elements = MyMap(receipts, transform, index + 1);
    const receipt = receipts[index];
    const transformed = transform(receipt);

    return [transformed].concat(elements);
  }
  return [];
}

function take(receipts, count, index = 0) {
  if (index < receipts.length && index < count) {
    const elements = take(receipts, count, index + 1);
    const receipt = receipts[index];
    return [receipt].concat(elements);
  }
  return [];
}

const condition = userIdEquals(3); //curring
const userId = 3;
const userReceipts = filter(0, receipts, (receipt) => receipt.id == userId);
const changedTotalOfUserReceipts = MyMap(userReceipts, (receipt) => [
  { ...receipt, total: receipt.total + 20 },
]);
const takeFew = take(changedTotalOfUserReceipts, 2);
