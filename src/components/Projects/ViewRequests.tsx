import { Request } from "../../utils/types/Types";
import Chip from "../Reuseables/Chip";
import Overlay from "../Reuseables/Overlay";
import SubSection from "../Reuseables/SubSection";
import RequestObject from "../Reuseables/Request";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "../../supabase/client";

interface PropsType {
  projectId: string;
  requests: Request[];
  state: () => void;
}

const ViewRequests = ({ projectId, state }: PropsType) => {
  const { data: requests } = useQuery({
    queryKey: ["project-request"],
    queryFn: async (): Promise<Request[]> => {
      const { data, error } = await supabase
        .from("Projects")
        .select("requests")
        .eq("id", projectId)
        .single();

      if (error) {
        console.error(error);
        throw new Error(error.message);
      }
      console.log(data.requests);
      return data.requests;
    },
  });
  return (
    <Overlay>
      <div className="h-[603px] w-[566px] rounded-[20px] bg-white">
        <SubSection header="Requests" state={state} />
        <div className="h-[451px] w-full flex flex-col py-4 px-6">
          <div className="flex gap-3">
            <Chip className="text-brand600 !border-brand600 h-7">All</Chip>
            <Chip className="px-3">Accepted</Chip>
            <Chip className="px-3">Declined</Chip>
          </div>
          <div className="flex flex-col gap-2">
            <p className="py-1">{requests?.length} requests</p>
            <div>
              {requests?.map((req, index) => {
                return (
                  <RequestObject
                    key={index}
                    projectId={projectId}
                    request={req}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </Overlay>
  );
};

export default ViewRequests;
