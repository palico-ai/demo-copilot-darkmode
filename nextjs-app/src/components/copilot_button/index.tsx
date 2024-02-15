import ThemeContext from "@/context/theme";
import { Button } from "@mui/material";
import { ChatWidget, GetSendMessageParamsFN } from "@palico-ai/react";
import { useContext, useState } from "react";

const CopilotButton: React.FC = () => {
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
  const [open, setOpen] = useState(false);
  const { isDark } = useContext(ThemeContext);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const setMessageParams: GetSendMessageParamsFN = async (userInput) => {
    return {
      message: userInput,
      context: {
        isTurnModeOn: isDark,
      },
    };
  };

  return (
    <div>
      <Button
        variant="contained"
        sx={{
          position: "fixed",
          bottom: 16,
          right: 16,
        }}
        ref={setAnchorEl}
        onClick={handleClick}
      >
        Copilot
      </Button>
      <ChatWidget
        width="400px"
        height="600px"
        getSendMessageParams={setMessageParams}
        headerTitle="Chatbot"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      />
    </div>
  );
};

export default CopilotButton;
