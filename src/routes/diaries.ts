import express from "express";
import * as diaryServices from "../services/diaryServices";
import { toNewDiaryEntry } from "../utils";

const router = express.Router();

router.get("/", (_, res) => {
  res.send(diaryServices.getEntriesWithoutSensitiveInfo());
});

router.get("/:id", (req, res) => {
  const diary = diaryServices.findById(+req.params.id);
  return diary ? res.send(diary) : res.sendStatus(404);
});

router.post("/", (req, res) => {
  try {
    const newDiaryEntry = toNewDiaryEntry(req.body);

    const addedDiaryEntry = diaryServices.addDiary(newDiaryEntry);

    res.json(addedDiaryEntry);
  } catch (e) {
    console.log(e);
  }
});

export default router;
