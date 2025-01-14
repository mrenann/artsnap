import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 5,
    backgroundColor: '#fff',
    borderRadius: 10,
    overflow: 'hidden',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  image: {
    width: '100%',
    height: 200,
  },
  textContainer: {
    padding: 10,
    width: '100%',
    flex: 1,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 16,
    minHeight: 40,
    marginBottom: 4,
    textAlign: 'center',
    verticalAlign: 'middle',
    flex: 1,
    flexShrink: 1,
  },
  photographer: {
    color: 'gray',
    fontSize: 14,
    marginBottom: 2,
    flex: 1,
    flexShrink: 1,
  },
  category: {
    color: 'blue',
    fontSize: 13,
    flex: 1,
    flexShrink: 1,
  },
});
