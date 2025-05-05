// Create a global notification utility
import { toast } from "react-toastify";

const notify = {
  success: (message) => toast.success(message),
  error: (message) => toast.error(message),
  info: (message) => toast.info(message),
  warn: (message) => toast.warn(message),
  default: (message) => toast(message),
};

export default notify;