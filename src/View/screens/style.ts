import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  linearGradient: {
    paddingTop: 44,
    // alignItems: 'center',
  },
  container: {
    flex: 1,
  },
  profileContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 24,
  },
  button: {
    width: 40,
    height: 40,
    backgroundColor: 'white',
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },

  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginTop: 10,
    borderColor: 'white',
    borderWidth: 4,
  },
  name: {
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 20,
    color: 'black',
  },
  ratingContainer: {
    paddingHorizontal: 24,
    alignItems: 'center',
  },
  ratingSection: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
  },
  rating: {
    fontWeight: 'bold',
    color: 'black',
    fontSize: 17,
    paddingLeft: 5,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 24,
    marginTop: 20,
  },
  buttonFollow: {
    borderColor: '#D2D2D7',
    borderWidth: 1,
    width: 156,
    alignItems: 'center',
    paddingVertical: 12,
    borderRadius: 50,
  },
  textExperience: {
    paddingHorizontal: 24,
    marginTop: 20,
  },
  info: {
    paddingHorizontal: 24,
    marginTop: 20,
  },
  // SocialLinks
  linkText: {
    fontSize: 15,
    textDecorationLine: 'underline',
    paddingRight: 2,
  },
  icon: {
    marginRight: 10,
  },
  containerSocial: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
});
