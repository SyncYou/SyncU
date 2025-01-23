import check from "/assets/tick.svg";
import cancel from "/assets/cancel.svg";
import { Request, UserData } from "../../utils/types/Types";
import { useEffect, useState } from "react";
import { getUserById } from "../../utils/AuthRequest";
import useRequestStatus from "../../hooks/useRequestStatus";
import { Loading } from "./Loading";
import { useQueryClient } from "@tanstack/react-query";

function RequestObject({
  request,
  projectId,
}: {
  request: Request;
  projectId: string;
}) {
  const client = useQueryClient();
  const [user, setUser] = useState<UserData>();
  const [requesting, setRequesting] = useState<boolean>();
  const { acceptRequest, rejectRequest } = useRequestStatus();

  useEffect(() => {
    const fetchUser = async () => {
      const data = await getUserById(request.userId);

      setUser(data);
    };

    fetchUser();
  }, []);

  const handleStatus = async (type: "accept" | "reject") => {
    try {
      setRequesting(true);
      if (type === "accept") {
        await acceptRequest(projectId, request.userId);
      } else {
        await rejectRequest(projectId, request.userId);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setRequesting(false);
      await client.invalidateQueries({
        queryKey: ["project-request"],
      });
    }
  };

  return (
    <div className="flex justify-between items-center py-1 px-2">
      {requesting && <Loading />}
      <div className="flex gap-2">
        <img src={user?.photoUrl} className="h-10 w-10 rounded-full" />
        <div className="flex flex-col gap-1">
          <h2 className="text-sm font-normal text-gray950">
            @{user?.username}
          </h2>
          <h2 className="text-xs font-normal text-gray700">
            {user?.areaOfExpertise}
          </h2>
        </div>
      </div>
      <span
        className={`font-medium text-xs ${request.status === "accepted" ? "text-success700" : "text-alert-600"}`}
      >
        {request.status === "accepted" && request.status.toUpperCase()}
        {request.status === "rejected" && request.status.toUpperCase()}
      </span>
      {request.status === "pending" && (
        <div className="flex gap-4">
          <button
            onClick={() => handleStatus("accept")}
            className="w-8 h-8 border border-success700 rounded-full flex items-center justify-center"
          >
            <img src={check} alt="" />
          </button>
          <button
            onClick={() => handleStatus("reject")}
            className="w-8 h-8 border border-alert-600 rounded-full flex items-center justify-center"
          >
            <img src={cancel} alt="" />
          </button>
        </div>
      )}
    </div>
  );
}

export default RequestObject;
