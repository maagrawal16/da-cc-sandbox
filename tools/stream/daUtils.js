// eslint-disable-next-line import/no-unresolved
import DA_SDK from 'https://da.live/nx/utils/sdk.js';

(async () => {
  try {
    const { context, token } = await DA_SDK;
    const { repo, path } = context;
    window.location.replace(
      `https://figmatoda--cc--adobecom.hlx.live/drafts/mathuria/figma-to-da/get-started?path=${path}&tenant=${repo}&token=${token}`
    );
  } catch (error) {
    console.error('Error initializing DA_SDK:', error);
  }
})();
