import {ID, Account, Client} from 'appwrite';
import Config from 'react-native-config';

import Snackbar from 'react-native-snackbar';

const appwiteClient = new Client();

const APPWRITE_ENDPOINT: string = Config.APPWRITE_ENDPOINT!;
const APPWRITE_PROJECT_ID: string = Config.APPWRITE_PROJECT_ID!;

type CreateUserAccount = {
  email: string;
  password: string;
  name: string;
};

type LoginUserAccount = {
  email: string;
  password: string;
};

//creating a services now
class AppwriteService {
  account;

  // this constructor will automatically called when class is initialized
  constructor() {
    appwiteClient
      .setEndpoint(APPWRITE_ENDPOINT)
      .setProject(APPWRITE_PROJECT_ID);

    this.account = new Account(appwiteClient);
  }

  //create a new record of user inside appwrite

  async createAccout({email, password, name}: CreateUserAccount) {
    try {
      const userAccount = await this.account.create(
        ID.unique(),
        email,
        password,
        name,
      );

      if (userAccount) {
        return this.login({email, password});
      } else {
        return userAccount;
      }
    } catch (error) {
      Snackbar.show({
        text: String(error),
        duration: Snackbar.LENGTH_LONG,
      });
      console.log('Appwrite service :: createAccount() :: ' + error);
    }
  }

  async login({email, password}: LoginUserAccount) {
    try {
    } catch (error) {
      Snackbar.show({
        text: String(error),
        duration: Snackbar.LENGTH_LONG,
      });
      console.log('Appwrite service :: createAccount() :: ' + error);
    }
  }
}
