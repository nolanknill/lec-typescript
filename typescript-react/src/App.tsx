import UserList from "./components/UserList/UserList";
import User from "./interfaces/User";
import ZodiacSign from "./enums/ZodiacSign";

function App() {
  const users: User[] = [
    {
      id: 1,
      name: "Person 1",
      zodiacSign: ZodiacSign.Aries
    },
    {
      id: 2,
      name: "Person 2",
      zodiacSign: ZodiacSign.Cancer
    },
    {
      id: 3,
      name: "Person 3",
      zodiacSign: ZodiacSign.Leo
    }
  ]

  return (
    <>
      <UserList title={"User's Zodiac signs"} users={users} />
    </>
  );
}

export default App;
