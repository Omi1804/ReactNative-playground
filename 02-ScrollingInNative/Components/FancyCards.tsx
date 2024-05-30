import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function FancyCards() {
  return (
    <View style={styles.container}>
      <Text style={styles.headingText}>Trending Places</Text>
      <View style={[styles.card, styles.cardElevated]}>
        <Image
          source={{
            uri: 'https://images.unsplash.com/photo-1477587458883-47145ed94245?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          }}
          style={styles.cardImage}
        />
        <View style={styles.cardBody}>
          <Text style={styles.cardTitle}>Hawa Mahal</Text>
          <Text style={styles.cardLabel}>Pink City, jaipur</Text>
          <Text style={styles.cardDescription}>
            The Hawa mahal is a place in the city of Jaipur, India. Built from
            red and Pink sandstone, it is on the edge of the City Palace.
          </Text>
          <Text style={styles.cardFooter}>12 mins away</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 8,
  },
  headingText: {
    textAlign: 'center',
    padding: 4,
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000000',
  },
  card: {
    height: 'auto',
    borderRadius: 6,
    marginVertical: 12,
  },
  cardElevated: {
    backgroundColor: 'white',
    elevation: 3,
    shadowOffset: {
      width: 1,
      height: 1,
    },
  },
  cardImage: {
    width: 'auto',
    height: 300,
    marginBottom: 8,
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
  },
  cardBody: {
    flex: 1,
    flexGrow: 1,
    paddingHorizontal: 12,
    paddingVertical: 6,
  },
  cardTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 6,
    color: '#000000',
  },
  cardLabel: {
    color: '#000000',
    fontSize: 14,
    marginVertical: 4,
  },
  cardDescription: {
    color: '#242B2E',
    fontSize: 12,
    marginVertical: 4,
    flexShrink: 1,
  },
  cardFooter: {
    color: '#000000',
  },
});
