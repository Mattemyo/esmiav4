export const initialAttributes = {
  bigHeader: 'Valkommen till Esmia',
  smallHeader: 'Vi saljer bla bla bla',
  buttonText: 'More info',
  image: 'hey'
};

export const getHeaderAttributes = (url) => {
  const reversedUrl = url
    .split('')
    .reverse()
    .join('');

  if (reversedUrl.substr(0, 4) === 'emoh') {
    return {
      ...initialAttributes,
      ...{
        bigHeader: 'Välkommen till Esmia HB',
        smallHeader: 'Vi säljer produkter',
        buttonText: 'Se produkter'
      }
    };
  }

  return {
    ...initialAttributes
  };
};
