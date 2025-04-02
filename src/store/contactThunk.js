import { fetchTestContacts } from "../services/contactService";
import {
  fetchContactsStart,
  fetchContactsSuccess,
  fetchContactsFailure,
} from "./contactsSlice";

export const fetchContacts =
  (count = 5) =>
  async (dispatch) => {
    try {
      dispatch(fetchContactsStart());
      const contacts = await fetchTestContacts(count);
      dispatch(fetchContactsSuccess(contacts));
    } catch (error) {
      dispatch(fetchContactsFailure(error.message));
    }
  };
