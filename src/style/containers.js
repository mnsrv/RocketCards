import { StyleSheet } from 'react-native';

const containers = StyleSheet.create({
  top: {
    paddingTop: 64,
    backgroundColor: '#F4F4F4',
    flex: 1,
  },
  leftRight: {
    paddingLeft: 25,
    paddingRight: 25,
  },
  operations: {
    paddingBottom: 82,
    backgroundColor: '#F4F4F4',
  },
  image: {
    borderRadius: 100,
    overflow: 'hidden',
    marginRight: 12,
  },
  imageSizes: {
    width: 52,
    height: 52,
  },
  text: {
    flex: 1,
    flexWrap: 'wrap',
  },
  line: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  info: {
    flexDirection: 'row',
    flexShrink: 1,
  },
});

export default containers;
