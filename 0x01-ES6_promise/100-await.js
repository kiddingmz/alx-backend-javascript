import { createUser, uploadPhoto } from './utils';

const asyncUploadUser = async () => {
	try {
		const photoResponse = await uploadPhoto();
		const user = await createUser();

		return {
			photo: photoResponse,
			user,
		};
	} catch (e) {
		return {
			photo: null,
			user: null,
		};
	}
};

export default asyncUploadUser;