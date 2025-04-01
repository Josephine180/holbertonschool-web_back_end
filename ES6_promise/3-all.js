import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  return Promise.all([uploadPhoto(), createUser()])
    .then(([Photo, User]) => {
      if (Photo && User) {
        console.log(Photo.body, User.firstName, User.lastName);
      } else {
        console.error('Données manquantes.');
      }
    })
    .catch((error) => {
      console.error('Signup system offline', error);
    });
}
