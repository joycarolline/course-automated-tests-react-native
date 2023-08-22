const navigation = jest.createMockFromModule('@react-navigation/native') as any;

navigation.useRoute = jest.fn().mockReturnValue({
  params: {
    token: 'mocked-token',
  },
});

const {useRoute} = navigation;

export {useRoute};

export default navigation;

// export const useRoute = jest.fn().mockReturnValue({
//   params: {
//     token: 'mocked-token',
//   },
// });
