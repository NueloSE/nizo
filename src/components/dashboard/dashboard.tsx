"use client"
import { useState } from "react";
import Chat from "./chat";
import Transactions from "./transactions";
import UserData from "./user-data";

function Dashboard() {
  const [transactionHistory] = useState([
    "Swap tokens - 30 USDT to 56 STRK",
    "Swap tokens - 30 USDT to 56 STRK",
    "Swap tokens - 30 USDT to 56 STRK",
  ]);

  // function addNewTransaction(newData:string) {
  //   setTransactionHistorry((data) => {
  //     return [...data, newData];
  //   });
  // }

  return (
    <section className="grid h-screen grid-cols-[1fr_3fr_1fr] md:grid-cols-[1.5fr_4fr_1.5fr] sm:gap-1 pt-4">
      <UserData/>
      <Chat/>
      <Transactions/>
    </section>
  );
}

export default Dashboard;
