import SecondaryButton from "../../Reuseables/SecondaryButton";
import PrimaryButton from "../../Reuseables/PrimaryButton";
import { BiCheckCircle } from "react-icons/bi";
import { PiSpinner } from "react-icons/pi";
import { useUserData } from "../../../context/useUserData";
import useUpdateUsername from "../../../hooks/useUpdateUsername";

const Username = () => {
  // Custom Hooks to update username
  const { user } = useUserData();
  const { username } = user;
  const {
    newUsername,
    error,
    checking,
    setChecking,
    success,
    setNewUsername,
    mutateAsync,
    isPending,
  } = useUpdateUsername(username);

  return (
    <div className="flex flex-col gap-6 pt-6 h-[622px] w-full">
      <div className="flex flex-col h-[490px] gap-8 px-8">
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-2">
            <p className="font-normal text-gray800 text-sm">
              You will be able to change your username again after 30 days.
            </p>
            <div className="relative h-[60px] w-[389px]">
              <div className="absolute h-6 w-6 right-3 top-[18px] z-50">
                {success && (
                  <BiCheckCircle className="w-full h-full text-success700" />
                )}
                {checking && (
                  <PiSpinner className="w-full h-full animate-spin" />
                )}
              </div>
              <input
                type="text"
                name="username"
                id="username"
                value={newUsername}
                onChange={(e) => {
                  setChecking(true);
                  setNewUsername(e.target.value);
                }}
                className={`h-[60px] w-full text-gray800 ${
                  error && "border-alert-600 focus:border-alert-600"
                } font-normal text-base pt-4 px-3 outline-none focus:drop-shadow-md border rounded-lg border-gray300 focus:border-brand400`}
              />
              <label
                className="absolute left-3 top-2 font-medium text-gray950 text-xs"
                htmlFor="username"
              >
                username
              </label>
            </div>
            {/* Check for the username in the database */}
            {checking && (
              <span className="font-normal text-sm text-gray800">
                checking username.....
              </span>
            )}
            {error && (
              <span className="font-normal text-sm text-alert-600">
                Username is already Taken
              </span>
            )}
            {success && (
              <span className="font-normal text-sm text-success700">
                Username is available
              </span>
            )}
          </div>
        </div>
      </div>
      <div className="w-full h-[84px] border-t border-gray200 px-8 pb-6 pt-4 flex justify-end  gap-4">
        <PrimaryButton
          onClick={async () => {
            await mutateAsync(newUsername);
          }}
          disabled={username === newUsername || isPending}
          classes="w-[120px] h-11 gap-0"
        >
          {isPending ? "Saving..." : "Save"}
        </PrimaryButton>
        <SecondaryButton classes="w-[120px] h-11 gap-0">Cancel</SecondaryButton>
      </div>
    </div>
  );
};

export default Username;
