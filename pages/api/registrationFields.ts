import { NextApiRequest, NextApiResponse } from "next"; 

const handler = async (req: NextApiRequest, res: NextApiResponse) => { 
  try {
    const formFields = [
        {
          group: 0,
          type: "text",
          component: "TextFieldComponent",
          required: true,
          props: {
            name: "firstName",
            placeHolder: "First Name",
            type: "text", 
            question: "First Name",
            subtext: "",
          },
        },
        {
          group: 0,
          type: "text",
          component: "TextFieldComponent",
          required: true,
          props: {
            name: "lastName",
            placeHolder: "Last Name",
            type: "text", 
            question: "Last Name",
            subtext: "",
          },
        },
        {
          group: 0,
          type: "email",
          component: "TextFieldComponent",
          required: true,
          props: {
            name: "email",
            placeHolder: "Email",
            type: "text", 
            question: "Email",
            subtext: "",
          },
        },
        {
          group: 1,
          type: "radio",
          component: "RadioComponent",
          required: true,
          props: {
            name: "laptop",
            listOfNames: ["Yes: Please bring it!", "No"],
            question: "Do you have a laptop you can bring?",
            subtext: "Unfortunately, we aren’t able to provide laptops this year.", 
          },
        },
        {
          group: 1,
          type: "text",
          component: "TextFieldComponent",
          required: false,
          props: {
            name: "experience",
            placeHolder: "Your experience level",
            type: "text", 
            question: "What is your experience level in programming?",
            subtext: "This doesn't make a difference! Just for us to know. You can participate regardless of experience level.",
          },
        },
        {
          group: 1,
          type: "radio",
          component: "RadioComponent",
          required: true,
          props: {
            name: "grade",
            listOfNames: ["9", "10", "11", "12"],
            question: "What grade are you in?",
            subtext: "For other, please contact us at team@hshacks.org", 
          },
        },
        {
          group: 1,
          type: "radio",
          component: "RadioComponent",
          required: false,
          props: {
            name: "tshirt",
            listOfNames: ["SM", "MD", "LG", "XL"],
            question: "T-shirt size",
            subtext: "", 
          },
        },
        {
          group: 2,
          type: "text",
          component: "TextFieldComponent",
          required: false,
          props: {
            name: "dietaryRestrictions",
            placeHolder: "Ex: Peanuts, gluten, lactose",
            type: "text", 
            question: "Dietary restrictions",
            subtext: "Ex: Peanuts, gluten, lactose",
          },
        },
        {
          group: 2,
          type: "text",
          component: "TextFieldComponent",
          required: false,
          props: {
            name: "otherInfo",
            placeHolder: "Other information",
            type: "text", 
            question: "Other information",
            subtext: "",
          },
        },
      ]


    return res.status(200).json(formFields)
  } catch (err) {  
    return res.status(500).json({ message: "Server Error" + err})
  }
} 

export default handler;
