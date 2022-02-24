import life from "@/assets/images/life.png";
import books from "@/assets/images/books.png";
import working from "@/assets/images/working.png";
import running from "@/assets/images/running.png";
import message from "@/assets/images/message.png";

export const VALID_INPUT_MESSAGE = "할 일을 입력하세요!";
export const VALID_DATE_MESSAGE = "오늘 또는 오늘 이후 날짜를 선택해주세요.";
export const DELETE_CONFIRM_MESSAGE = "정말 삭제하시겠습니까?";

export const categories = [
  { value: "생활", icon: life },
  { value: "공부", icon: books },
  { value: "업무", icon: working },
  { value: "운동", icon: running },
  { value: "기타", icon: message },
];
export const importances = ["상", "중", "하"];

export const NOT_STARTED = "Not Started";
export const IN_PROGRESS = "In Progress";
export const DONE = "Done";

// Dropdown Menu
export const options = [
  { value: "생성순" },
  { value: "중요도순" },
  { value: "날짜순" },
];

// days
export const days = ["일", "월", "화", "수", "목", "금", "토"];

// Dropdown options
export const dropdownOptions = {
  PRODUCE_ORDER: "생성순",
  IMPORTANCE_ORDER: "중요도순",
  DATE_ORDER: "날짜순",
};
