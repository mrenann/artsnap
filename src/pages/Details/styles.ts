import {Dimensions, StyleSheet} from 'react-native';

const {width} = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
  },

  image: {
    width: '100%',
    height: width * 0.75,
    marginBottom: 16,
  },

  textContainer: {
    width: '100%',
    backgroundColor: '#F9F9F9',
    padding: 16,
    marginBottom: 16,
  },

  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333333',
    marginBottom: 8,
  },

  photographer: {
    fontSize: 16,
    color: '#555555',
    marginBottom: 4,
  },

  category: {
    fontSize: 16,
    color: '#777777',
    marginBottom: 4,
  },

  resolution: {
    fontSize: 14,
    color: '#999999',
    marginBottom: 4,
  },

  likes: {
    fontSize: 14,
    color: '#FF6F61',
    marginBottom: 4,
  },

  price: {
    fontSize: 18,
    fontWeight: '600',
    color: '#28A745',
    marginTop: 8,
  },

  buttonContainer: {
    paddingHorizontal: 10,
    width: '100%',
  },
  buyButton: {
    backgroundColor: '#007BFF',
    paddingVertical: 14,
    margin: 16,
    borderRadius: 8,
    alignItems: 'center',
  },

  buyButtonText: {
    fontSize: 18,
    color: '#FFFFFF',
    fontWeight: 'bold',
  },

  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },

  loadingText: {
    marginTop: 10,
    fontSize: 16,
    color: '#555555',
  },

  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#FFFFFF',
  },

  errorText: {
    fontSize: 16,
    color: '#FF4D4F',
    textAlign: 'center',
  },
});
