export default function uploadPhoto(filename) {
  const Firstpromise = Promise.reject(new Error(`${filename} cannot be processed`));
  return Firstpromise;
}
