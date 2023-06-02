import Cookies from "js-cookie";
import { expiryTime } from './Constant';

/**
 * @function storeValue
 * @description function to store values by key in the web cookie storage
 */
export const storeValue = (key: string, value: any) => Cookies.set(key, value, { expires: expiryTime });

/**
 * @function getValue
 * @description function to get values by key in the web cookie storage
 */
export const getValue = (key: string) => Cookies.get(key);

/**
 * @function removeValue
 * @description function to remove values by key in the web cookie storage
 */
export const removeValue = (key: string) => Cookies.remove(key);