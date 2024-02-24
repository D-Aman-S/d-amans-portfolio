import {
  CreateEmailUserDetails,
  LoginDetails,
} from "@/app/_interfaces/authModels";
import dbConfig from "@/app/_constants/dbConfig";
import routingConstants from "@/app/_constants/routingConstants";
import { Client, Account, ID, Databases } from "appwrite";

export const appwriteClient = new Client();

appwriteClient
  .setEndpoint(dbConfig.appwriteEndpoint)
  .setProject(dbConfig.appwriteProjectId);

export const account = new Account(appwriteClient);
export const appwriteDb = new Databases(appwriteClient);

export class AppwriteService {
  async createEmailUserAccount({
    email,
    password,
    username,
  }: CreateEmailUserDetails) {
    try {
      const userAccount = await account.create(
        ID.unique(),
        email,
        password,
        username
      );
      if (userAccount) {
        return this.loginByEmail({ email, password });
      } else {
        return userAccount;
      }
    } catch (error) {
      throw error;
    }
  }

  async loginByEmail({ email, password }: LoginDetails) {
    try {
      const emailSession = await account.createEmailSession(email, password);
      return emailSession;
    } catch (error) {
      throw error;
    }
  }

  async isLoggedIn(): Promise<boolean> {
    try {
      const userData = await this.getCurrentUser();
      return Boolean(userData);
    } catch (error) {
      throw error;
    }
    return false;
  }

  async getCurrentUser() {
    try {
      return await account.get();
    } catch (error) {
      throw error;
    }
    return null;
  }

  async logout() {
    try {
      return await account.deleteSession("current");
    } catch (error) {
      throw error;
    }
  }

  async createEmailAccountRecovery(email: string) {
    try {
      const res = await account.createRecovery(
        email,
        routingConstants.resetPasswordUrl
      );
      return res;
    } catch (error) {
      return null;
    }
  }

  async updateEmailAccountRecovery(
    userId: string,
    secret: string,
    new_password: string,
    confirm_password: string
  ) {
    try {
      const res = await account.updateRecovery(
        userId,
        secret,
        new_password,
        confirm_password
      );
      return res;
    } catch (error) {
      return null;
    }
  }
}

const appwriteService = new AppwriteService();

export default appwriteService;
