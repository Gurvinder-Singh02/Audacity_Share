import { useUserContext } from "@/context/AuthContext";
import { Models } from "appwrite";
import { Link } from "react-router-dom";

type StoryBarProps = {
  follow?: Models.Document[];
};

const StoryBar = ({ follow }: StoryBarProps) => {
  const { user } = useUserContext();

  const users = follow?.filter((item: any) => item.$id !== user.id);
  users?.splice(1, 1);
  return (
    <section className="flex-start max-w-[400px] lg:max-w-[650px] md:max-w-[650px] overflow-scroll custom-scrollbar ">
      <div className="flex-center  min-w-[90px]  flex-1 flex-col gap-2 relative">
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
        <Link to={`/profile/${user.$id}`}>
          <div
            key={user.$id}
            className="min-w-[100px] flex-center flex-col gap-2 ">
            <img
              className="rounded-full border-4 size-20 border-primary-500 p-1 object-cover "
              src={user.imageUrl || "/assets/icons/profile-placeholder.svg"}
              alt="Profile"
            />
            <p className="small-medium text-center truncate w-16 ">{user.name}</p>
            {index > 2}
          </div>
        </Link>
      ))}
    </section>
  );
};

export default StoryBar;
