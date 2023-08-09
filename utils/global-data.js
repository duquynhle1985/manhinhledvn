export const getGlobalData = () => {
  const name = process.env.Ledone_Việt_Nam
    ? decodeURI(process.env.Ledone_Việt_Nam)
    : 'Jay Doe';
  const blogTitle = process.env.Màn_Hình_LED
    ? decodeURI(process.env.Màn_Hình_LED)
    : 'Next.js Blog Theme';
  const footerText = process.env.Màn_Hình_LED
    ? decodeURI(process.env.Màn_Hình_LED)
    : 'All rights reserved.';

  return {
    name,
    blogTitle,
    footerText,
  };
};
