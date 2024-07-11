import { getAll, getById, getByEmail } from "../models/user";
import { Messages } from "../utils/messages";

class UserController {
  async getAll() {
    return await getAll();
  }

  async getById(id: number | string) {
    if (!id) {
      return Messages.MISSING_DATA;
    }

    console.log(id);
    
    return await getById(id);
  }

  async getByEmail(email: string) {
    if (!email) {
      return Messages.MISSING_DATA;
    } else if (typeof email != "string") {
      return Messages.BAD_REQUEST;
    }
    return await getByEmail(email);
  }
}

const users = new UserController();

// users => { getAll: ()=>{}, getById: ()=>{} }

const { getAll: allUsers, getById: idUsers, getByEmail: usersEmail } = users;

export { allUsers, idUsers, usersEmail };
