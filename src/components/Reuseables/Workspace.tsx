import Slack from "/assets/slack.svg";
import Discord from "/assets/Discord.svg";
import Microsoft from "/assets/Microsoft.svg";

const WorkSpace = ({
  workspace,
}: {
  workspace: "Slack" | "Discord" | "Microsoft teams";
}) => {
  if (workspace === "Slack") {
    return <img src={Slack} />;
  } else if (workspace === "Discord") {
    return <img src={Discord} />;
  } else {
    return <img src={Microsoft} />;
  }
};

export default WorkSpace;
