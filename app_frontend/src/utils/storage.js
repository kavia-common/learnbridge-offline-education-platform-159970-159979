const STORAGE_PREFIX = 'learnbridge_';

function safeParse(v, fallback = null) {
  try { return JSON.parse(v); } catch { return fallback; }
}

// PUBLIC_INTERFACE
export function setItem(key, value) {
  /** Store a JSON-serializable value under a namespaced key. */
  try {
    localStorage.setItem(STORAGE_PREFIX + key, JSON.stringify(value));
  } catch (e) {
    // Storage might be full or disabled; ignore to keep app functional offline
    console.warn('Storage setItem failed', e);
  }
}

// PUBLIC_INTERFACE
export function getItem(key, defaultValue = null) {
  /** Retrieve a stored value or a default if not present. */
  try {
    const v = localStorage.getItem(STORAGE_PREFIX + key);
    if (v === null || v === undefined) return defaultValue;
    return safeParse(v, defaultValue);
  } catch (e) {
    return defaultValue;
  }
}

// PUBLIC_INTERFACE
export function removeItem(key) {
  /** Remove a stored value by key. */
  try {
    localStorage.removeItem(STORAGE_PREFIX + key);
  } catch {
    // noop
  }
}
