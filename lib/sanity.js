// /lib/sanity.js
import sanityClient from '@sanity/client';

// See the image above on how to get your projectId and add a new API token
// I added one called "landing page"
const client = sanityClient({
  projectId: 'vn88o3gc',
  dataset: 'production',
  token: 'sknddzuoSvVm5HkDktUpqb3AyCOAHILfQysxsbEhF8nPivOLhV3qOGIxjj4Owoisaow51zThmNxNgeStTSUT3SBbWjcCOjHe4FKUiQrfSin9Z8fDeX1Kd0SaE2DdrxAj8uGvcxcXS3Ly5iqHDPTEuFAOLTwtQVh7KBxppUdLMqDyWqHyjiaw', // or leave blank to be anonymous user
  useCdn: false, // `false` if you want to ensure fresh data
  ignoreBrowserTokenWarning: true,
});

export default client;