import { Box } from "@mui/material";

const UserImage = ({ image, size = "60px" }) => {
  return (
    <Box width={size} height={size}>
      <img
        style={{ objectFit: "cover", borderRadius: "50%" }}
        width={size}
        height={size}
        src={`https://server-social-media-app.vercel.app/assets/${image}`}
        alt={`User profile`}
      />
    </Box>
  );
};

export default UserImage;
