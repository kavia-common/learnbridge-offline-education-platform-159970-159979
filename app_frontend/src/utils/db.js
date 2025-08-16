import localforage from 'localforage';

localforage.config({
  name: 'learnbridge',
  storeName: 'learnbridge_store',
  description: 'Offline storage for LearnBridge app'
});

// PUBLIC_INTERFACE
export const db = {
  /** Store a value in a named bucket (table). */
  async set(bucket, key, value) {
    const store = localforage.createInstance({ name: 'learnbridge', storeName: `${bucket}` });
    return store.setItem(key, value);
  },
  /** Retrieve a value from a named bucket. */
  async get(bucket, key) {
    const store = localforage.createInstance({ name: 'learnbridge', storeName: `${bucket}` });
    return store.getItem(key);
  },
  /** Get all keys for a bucket. */
  async keys(bucket) {
    const store = localforage.createInstance({ name: 'learnbridge', storeName: `${bucket}` });
    return store.keys();
  },
  /** Iterate over all items in a bucket. */
  async entries(bucket) {
    const store = localforage.createInstance({ name: 'learnbridge', storeName: `${bucket}` });
    const entries = [];
    await store.iterate((value, key) => {
      entries.push([key, value]);
    });
    return entries;
  },
  /** Remove an item. */
  async remove(bucket, key) {
    const store = localforage.createInstance({ name: 'learnbridge', storeName: `${bucket}` });
    return store.removeItem(key);
  },
  /** Clear a bucket. */
  async clear(bucket) {
    const store = localforage.createInstance({ name: 'learnbridge', storeName: `${bucket}` });
    return store.clear();
  }
};
