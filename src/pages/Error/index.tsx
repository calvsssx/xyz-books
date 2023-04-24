import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Button, Text } from "@chakra-ui/react";

interface ErrorProps {
  message: string;
}

const ErrorPage: FC<ErrorProps> = ({ message }) => {
  const history = useNavigate();

  const handleBackButtonClick = () => {
    history("/Search");
  };

  return (
    <Box textAlign="center" mt="50px" mb="100">
      <Text fontSize="3xl" mb="10px">
        No Records Found
      </Text>
      <Button mt={4} colorScheme="teal" onClick={handleBackButtonClick}>
        Go Back
      </Button>
    </Box>
  );
};

export default ErrorPage;
