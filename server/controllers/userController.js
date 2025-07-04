import  {Webhook} from "svix"
import userModel from "../models/userModel.js"

// API controller function to manage clerk user with database
// http://localhost:4000/api/user/webhooks
const clerkWebhooks = async (req, res) => {
  try {
    //create a Svix instance with clerk webhook sercet.
    const whook = new Webhook(process.env.CLERK_WEBHOOK_SECRET);

    await whook.verify(JSON.stringify(req.body), {
      "svix-id": req.headers["svix-id"],
      "svix-timestamp": req.headers["svix-timestamp"],
      "svix-signature": req.headers["svix-signature"],
    });

    const { data, type } = req.body;

    switch (type) {
      case "user.created": {
        const userData = {
          clerkId: data.id,
          email: data.email_addresses[0].email_address,
          photo: data.image_url,
          firstName: data.first_name,
          lastName: data.last_name,
        };

        await userModel.create(userData);
        res.json({});

        break;
      }

      case "user.updated": {
        const userData = {
          email: data.email_addresses[0].email_address,
          photo: data.image_url,
          firstName: data.first_name,
          lastName: data.lase_name,
        };

        await userModel.findOneAndUpdate({ clerkId: data.id }, userData);
        res.json({});

        break;
      }
      case "user.deleted": {
        await userModel.findOneAndDelete({ clerkId: data.id });
        res.json({});
        break; 
      }
      default:
        break;
    }
  } catch (error) {
    console.log("====================================");
    console.log(error.message);
    console.log("====================================");
    res.json({ success: false, message: error .message});
  }
};



// API  controller function to get user available credits data

const userCredits = async (req, res) => {
  try {
    const clerkId = req.clerkId; // ✅ fixed

    if (!clerkId) {
      return res.status(400).json({ success: false, message: "Clerk ID missing" });
    }

    const userData = await userModel.findOne({ clerkId });

    if (!userData) {
      return res.status(404).json({ success: false, message: "User not found" });
    }

    res.json({ success: true, credits: userData.creditBalance });
  } catch (error) {
    console.log("====================================");
    console.log(error.message);
    console.log("====================================");
    res.json({ success: false, message: error.message });
  }
};


export {clerkWebhooks,userCredits};
