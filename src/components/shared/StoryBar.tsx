import { useUserContext } from "@/context/AuthContext";

const StoryBar = ({ follow }) => {
  const { user } = useUserContext();

  console.log("we have userws s", follow.documents);
  console.log("and this is me ", user);

  const users = follow?.documents.filter((item: any) => item.$id !== user.id);
  users.splice(1, 1);
  console.log("we have userws s", user);
  return (
    <div className="flex-start w-full overflow-scroll custom-scrollbar gap-4 p-4 ">
      <div className="flex-center flex-col gap-2 w-[100px] relative">
        <img
          width={80}
          height={80}
          className="rounded-full border-4 h-[80px] border-primary-500 p-1 object-cover "
          src={user.imageUrl || "/assets/icons/profile-placeholder.svg"}
          alt="Profile"
        />
        <p className="absolute right-0 bottom-6  bg-white rounded-full text-black px-[7px] text-bold cursor-pointer  ">
          +
        </p>
        <p className="small-medium truncate ">My Story </p>
      </div>
      {users?.map((user: any, index: number) => (
        <div key={user.$id} className="flex-center flex-col gap-2 w-[100px]">
          <img
            width={80}
            height={80}
            className="rounded-full border-4 h-[80px]  border-primary-500 p-1 object-cover "
            src={user.imageUrl || "/assets/icons/profile-placeholder.svg"}
            alt="Profile"
          />
          <p className="small-medium truncate ">{user.name}</p>
          {index > 2}
        </div>
      ))}
    </div>
  );
};

export default StoryBar;
