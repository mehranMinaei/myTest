import AsyncStorage from '@react-native-async-storage/async-storage';

export class Storage {
  /**
   * Loads a string from storage.
   *
   * @param key The key to fetch.
   */
  static async loadString(key: string): Promise<string | null> {
    try {
      return await AsyncStorage.getItem(key);
    } catch {
      // not sure why this would fail... even reading the RN docs I'm unclear
      console.error('storage: load string failed');
      return null;
    }
  }

  /**
   * Saves a string to storage.
   *
   * @param key The key to fetch.
   * @param value The value to store.
   */
  static async saveString(key: string, value: string): Promise<boolean> {
    try {
      await AsyncStorage.setItem(key, value);
      return true;
    } catch {
      return false;
    }
  }

  /**
   * Loads something from storage and runs it thru JSON.parse.
   *
   * @param key The key to fetch.
   */
  static async loadJSON<T = any>(key: string): Promise<T | null> {
    try {
      const almostThere = await AsyncStorage.getItem(key);
      return JSON.parse(almostThere!) as T;
    } catch {
      console.error('storage: load failed');
      return null;
    }
  }

  /**
   * Saves an object to storage.
   *
   * @param key The key to fetch.
   * @param value The value to store.
   */
  static async saveJSON(key: string, value: any): Promise<boolean> {
    try {
      await AsyncStorage.setItem(key, JSON.stringify(value));
      return true;
    } catch {
      return false;
    }
  }

  /**
   * Removes something from storage.
   *
   * @param key The key to kill.
   */
  static async remove(key: string): Promise<void> {
    try {
      await AsyncStorage.removeItem(key);
    } catch {
      console.error('storage: remove failed');
    }
  }

  /**
   * Burn it all to the ground.
   */
  static async clear(): Promise<void> {
    try {
      await AsyncStorage.clear();
    } catch {}
  }
}
