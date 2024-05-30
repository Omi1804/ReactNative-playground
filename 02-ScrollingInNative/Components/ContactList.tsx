import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function ContactList() {
  const contacts = [
    {
      uid: 1,
      name: 'Om Nigam',
      status: 'Making your GPay smooth',
      imageUrl:
        'https://images.pexels.com/photos/879143/pexels-photo-879143.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
    {
      uid: 2,
      name: 'Alice Johnson',
      status: 'Exploring the world of AI',
      imageUrl:
        'https://images.pexels.com/photos/879143/pexels-photo-879143.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
    {
      uid: 3,
      name: 'Bob Smith',
      status: 'Coding the future',
      imageUrl:
        'https://images.pexels.com/photos/879143/pexels-photo-879143.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
    {
      uid: 4,
      name: 'Charlie Brown',
      status: 'Designing user-friendly apps',
      imageUrl:
        'https://images.pexels.com/photos/879143/pexels-photo-879143.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
    {
      uid: 5,
      name: 'David Wilson',
      status: 'Innovating in fintech',
      imageUrl:
        'https://images.pexels.com/photos/879143/pexels-photo-879143.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
    {
      uid: 6,
      name: 'Eva Adams',
      status: 'Developing robust systems',
      imageUrl:
        'https://images.pexels.com/photos/879143/pexels-photo-879143.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
    {
      uid: 7,
      name: 'Frank Clark',
      status: 'Pioneering blockchain technology',
      imageUrl:
        'https://images.pexels.com/photos/879143/pexels-photo-879143.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
    {
      uid: 8,
      name: 'Grace Lee',
      status: 'Advancing machine learning',
      imageUrl:
        'https://images.pexels.com/photos/879143/pexels-photo-879143.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
    {
      uid: 9,
      name: 'Hannah Moore',
      status: 'Creating seamless UX/UI',
      imageUrl:
        'https://images.pexels.com/photos/879143/pexels-photo-879143.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
    {
      uid: 10,
      name: 'Ian Taylor',
      status: 'Revolutionizing mobile apps',
      imageUrl:
        'https://images.pexels.com/photos/879143/pexels-photo-879143.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.headingText}>ContactList</Text>
      <ScrollView style={styles.scrollView}>
        {contacts.map(contact => {
          return (
            <View key={contact.uid} style={styles.userCard}>
              <Image
                source={{uri: contact.imageUrl}}
                style={styles.userImage}
              />
              <View>
                <Text style={styles.userName}>{contact.name}</Text>
                <Text style={styles.userStatus}>{contact.status}</Text>
              </View>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  headingText: {
    color: '#000000',
    textAlign: 'center',
    fontSize: 24,
    fontWeight: 'bold',
    paddingVertical: 4,
  },
  scrollView: {
    flex: 1,
  },
  userCard: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 6,
    padding: 4,
    paddingHorizontal: 9,
    borderRadius: 8,
    backgroundColor: '#09AEFE',
  },
  userImage: {
    width: 50,
    height: 50,
    marginRight: 14,
    borderRadius: 50 / 2,
  },

  userName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000000',
  },
  userStatus: {
    fontSize: 12,
  },
});
