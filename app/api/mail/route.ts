import { NextApiResponse } from "next";
import { NextRequest } from "next/server";
import { render } from "@react-email/render";
import WelcomeTemplate from "@/emails/mail";
import { sendMail } from "@/lib/email";
import { EmailMessageType } from "@/comon.types";

export const POST = async (req: NextRequest, res: NextApiResponse) => {
  // console.log("First Request");
  const message: EmailMessageType = await req.json();
  // console.log(message);

  try {
    await sendMail({
      to: "jksa.work.1@gmail.com",
      subject: "Personal Repsonse",
      html: render(WelcomeTemplate(message)),
    });
    return new Response("Email sent successfully", { status: 200 });
  } catch (error) {
    //   @ts-ignore
    console.log(error.message);
  }
};
