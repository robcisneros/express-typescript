import { DiaryEntry, NonSensitiveDiaryEntry } from "../types";
import diaryData from "./diaries.json";

const diaries: DiaryEntry[] = diaryData as DiaryEntry[];

export const getEntries = () => diaries;

export const getEntriesWithoutSensitiveInfo = (): NonSensitiveDiaryEntry[] => {
  return diaries.map(({ id, date, weather, visibility }) => {
    return { id, date, weather, visibility };
  });
};

export const findById = (id: number): NonSensitiveDiaryEntry | undefined => {
  const entry = diaries.find((diary) => diary.id === id);
  if (entry) {
    const { comment, ...restOfDiary } = entry;
    return restOfDiary;
  }
  return undefined;
};

export const addEntry = () => {};
