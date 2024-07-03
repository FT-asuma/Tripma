import React, { useState } from "react";
import styles from "./entrance.module.css";
import { BiSolidPlaneTakeOff } from "react-icons/bi";
import { BiSolidPlaneLand } from "react-icons/bi";
import { Button } from "../utils/Button";
import { CiCalendar } from "react-icons/ci";
import { FaUser } from "react-icons/fa6";
type ValuePiece = Date | null;
type Value = ValuePiece | [ValuePiece, ValuePiece];
export const Form = () => {
  const [date, setDate] = useState<Value>(new Date());
  const handleSubmit = async (e: {
    preventDefault: () => void;
    target: any;
  }) => {
    e.preventDefault();
  };
  return (
    <div className={styles.formSection}>
      <form action="#" onSubmit={handleSubmit}>
        <button className={styles.selectors}>
          <BiSolidPlaneTakeOff size={24} color="grey" />
          From where?
        </button>
        <button className={styles.selectors}>
          <BiSolidPlaneLand size={24} color="grey" />
          Where to?
        </button>
        <button className={styles.selectors}>
          <CiCalendar size={24} color="grey" />
          Depart - Return
        </button>
        <button className={styles.selectors}>
          <FaUser size={20} color="grey" />1 adult
        </button>
        <Button setter={() => {}} value>
          Search
        </Button>
      </form>
    </div>
  );
};
