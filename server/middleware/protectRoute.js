import jwt from "jsonwebtoken";
import User from "../models/user.model.js";

const protectRoute = async (req, res, next) => {
  try {
    const token = req.cookie.jwt;

    if (!token) {
      res.status(400).json({ error: "Unauthorised - No Token Provided" });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    if (!decoded) {
      res.status(401).json({ error: "Unauthorised - Invalid Token" });
    }

    const user = await User.findById(decoded.userId).select("-password");
    if (!user) {
      return res.status(404).json({ error: "User not found!!" });
    }

    req.user = user;
    next();
  } catch (error) {
    console.log("Error in protectRoutes", error.message);
    res.status(500).json({ error: "Internal server error!!" });
  }
};

export default protectRoute;
