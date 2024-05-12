import { useUserContext } from "@/context/AuthContext";
import { Models } from "appwrite";

type StoryBarProps = {
  follow ?: Models.Document[]
};


const StoryBar = ({ follow } : StoryBarProps) => {
  const { user } = useUserContext();

  const users = follow?.filter((item: any) => item.$id !== user.id);
  users?.splice(1, 1);
  return (
    <section className="flex-start w-full overflow-scroll custom-scrollbar gap-4 ">
      <div className="flex-center min-w-[100px]  flex-1 flex-col gap-2 relative">
        <img
          width={80}
          height={80}
          className="rounded-full border-4 h-[80px] border-primary-500 p-1 object-cover "
          src={user.imageUrl || "/assets/icons/profile-placeholder.svg"}
          alt="Profile"
        />
        <p className="absolute right-2 bottom-8  bg-white rounded-full text-black px-[7px] text-bold cursor-pointer  ">
          +
        </p>
        <p className="small-medium truncate ">My Story </p>
      </div>
      {users?.map((user: any, index: number) => (
        <div key={user.$id} className="min-w-[100px] flex-center flex-col gap-2 ">
          <img
            className="rounded-full border-4 size-20 border-primary-500 p-1 object-cover "
            src={user.imageUrl || "/assets/icons/profile-placeholder.svg"}
            alt="Profile"
          />
          <p className="small-medium truncate ">
            {user.name}
          </p>
          {index > 2}
        </div>
      ))}
    </section>
  );
};

export default StoryBar;
