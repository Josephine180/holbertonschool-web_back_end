export default function getResponseFromAPI() {
  const promise = new Promise((resolve, reject) => {
    const success = true;
    if (success) {
      resolve('Resolve ');
    } else {
      reject(new Error('Reject'));
    }
  });
  return promise;
}
