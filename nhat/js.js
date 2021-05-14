var promise = function () {
  return Promise.resolve("Đây là data");
};

function run(data) {
  return data;
}
async function getData() {
  var data = await promise();
  console.log(run(data));
}
getData();
