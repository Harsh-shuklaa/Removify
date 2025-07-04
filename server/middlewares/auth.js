import jwt from "jsonwebtoken";

const authUser = async (req, res, next) => {
  try {
    const { token } = req.headers;

    if (!token) {
      return res.status(401).json({
        success: false,
        message: "Not Authorized. Please login again.",
      });
    }

    const token_decode = jwt.decode(token);

    if (!token_decode?.clerkId) {
      return res.status(400).json({
        success: false,
        message: "Invalid token. Clerk ID missing.",
      });
    }

    req.clerkId = token_decode.clerkId; // ✅ safer than req.body
    next();
  } catch (error) {
    console.log("authUser error =>", error.message);
    res.status(500).json({ success: false, message: error.message });
  }
};

export default authUser;
