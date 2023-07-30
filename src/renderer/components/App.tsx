import { useEffect, useState } from "react";
import Reminder from "../models/Reminder";
import ReminderService from "../services/Reminder";
import NewReminder from "./NewReminder";
import ReminderList from "./ReminderList";
import DummyService from "../services/Dummy";
import Dummy from "../models/Dummy";

// (window as any).api.doneWithQuery(function (data: { myResult: any }) {
//   console.log(data.myResult); // true
// });
// (window as any).api.query("select name from sqlite_master where type='table'");

export default function App() {
  const [dummyData, setDummyData] = useState<Dummy>(new Dummy("", -1));
  const [reminders, setReminders] = useState<Reminder[]>([]);
  // const TestTableNames = (window as any).TestTableNames;

  useEffect(() => {
    loadDummyData();
    loadReminders();
  }, []);

  const loadDummyData = async () => {
    const dummyData = await DummyService.get();
    setDummyData(dummyData);
  };

  const loadReminders = async () => {
    const reminders = await ReminderService.getReminders();
    setReminders(reminders);
  };

  const removeReminder = async (id: number) => {
    setReminders(reminders.filter((reminder) => reminder.id !== id));
  };

  const addReminder = async (title: string) => {
    const newReminder = await ReminderService.addReminder(title);
    const newId = Math.max(...reminders.map((reminder) => reminder.id), 1) + 1;
    setReminders([new Reminder(newId, newReminder.title), ...reminders]);
    // alert("Reminder added");
  };

  const updateReminder = async (reminder: Reminder) => {
    console.log(reminder);
    const updatedReminder = await ReminderService.updateReminder(reminder);
    console.log(updatedReminder);
    const remindersCopy = [...reminders];
    remindersCopy[reminder.id].title = updatedReminder.title;
    // var reminderToUpdate = reminders.filter((rem) => rem.id === reminder.id)[0];
    // reminderToUpdate.title = reminder.title;

    setReminders(remindersCopy);
  };

  return (
    <div className="App">
      <header>
        <h1>Reminders</h1>
      </header>
      {/* <h3>Test table names from sqlite</h3>
      <p>{TestTableNames?.getTestTableNames}</p> */}
      <h3>{dummyData.name}</h3>
      <p>{dummyData.age}</p>
      <NewReminder onAddReminder={addReminder} />
      <ReminderList
        reminders={reminders}
        onRemoveReminder={removeReminder}
        onUpdateReminder={updateReminder}
      />
    </div>
  );
}
