import {
  Image,
  Linking,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';

export default function ActionCards() {
  function openWebsite(wesiteLink: string) {
    Linking.openURL(wesiteLink);
  }
  return (
    <View style={styles.container}>
      <Text style={styles.headingText}>Blog Card</Text>
      <View style={[styles.card, styles.elevatedCard]}>
        <View style={styles.headingContainer}>
          <Text style={styles.headerText}>
            What's new in Javascript 21 - ES12
          </Text>
        </View>
        <Image
          source={{
            uri: 'https://images.pexels.com/photos/1261427/pexels-photo-1261427.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
          }}
          style={styles.cardImage}
        />
        <View style={styles.bodyContainer}>
          <Text numberOfLines={3}>
            Just like every year, javascript brings in new features. This year
            javascript is brigning 4 new features, which are almost in
            production rollout. I won't be wasting much more time and directly
            jump to the code with easy to understand example.
          </Text>
        </View>
        <View style={styles.footerContainer}>
          <TouchableOpacity
            onPress={() =>
              openWebsite('https://next-skillsphere.devomini.com/')
            }>
            <Text style={styles.socialLinks}>Read More</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              openWebsite('https://next-skillsphere.devomini.com/')
            }>
            <Text style={styles.socialLinks}>Follow Me</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 8,
  },
  headingText: {
    color: '#000000',
    textAlign: 'center',
    fontSize: 24,
    fontWeight: 'bold',
    paddingVertical: 4,
  },
  card: {
    height: 'auto',
    borderRadius: 6,
    marginVertical: 12,
    marginHorizontal: 8,
  },
  elevatedCard: {
    backgroundColor: '#ffffff',
    elevation: 4,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowColor: '#333',
    shadowOpacity: 0.4,
  },
  headingContainer: {
    height: 40, //we can directly give it a height
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    color: '#000',
    fontSize: 16,
    fontWeight: 'bold',
  },
  cardImage: {
    height: 300,
  },
  bodyContainer: {
    padding: 8,
  },
  footerContainer: {
    padding: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  socialLinks: {
    fontSize: 16,
    color: '#000000',
    backgroundColor: '#f0ecec',
    paddingHorizontal: 20,
    paddingVertical: 4,
    borderRadius: 6,
  },
});
