const navigation = jest.createMockFromModule('@react-navigation/native') as any;

navigation.useRoute = jest.fn().mockReturnValue({
  params: {
    token: 'mocked-token',
  },
});

navigation.useNavigation = jest.fn().mockReturnValue({
  navigate: () => {},
});

const {useRoute, useNavigation} = navigation;

export {useRoute, useNavigation};

export default navigation;

// --- Alternativa 2
// const useRoute = jest.fn().mockReturnValue({
//   params: {
//     token: 'mocked-token',
//   },
// });

// const useNavigation = jest.fn().mockReturnValue({
//   navigate: () => {},
// });

// export {useRoute, useNavigation};
