import {Router} from "express";
import {wrapJSON} from "./wrapper";
import {makeError} from "../utils/error";
import {email, password} from "../../shared/constants/misc";


const router = Router(); // eslint-disable-line new-cap

router.use("/api/login", wrapJSON((req, res) => {

  if (req.body.email !== email) {
    return Promise.reject(makeError("Email not found!", 400, {
      name: "email",
      reason: "not-found",
    }));
  }

  if (req.body.password !== password) {
    return Promise.reject(makeError("Incorrect password!", 400, {
      name: "password",
      reason: "incorrect",
    }));
  }

  return Promise.resolve(req.body);
}));

export default router;
