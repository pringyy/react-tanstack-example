
import { RJSFSchema, UiSchema, WidgetProps, RegistryWidgetsType, ObjectFieldTemplateProps} from "@rjsf/utils";
import validator from "@rjsf/validator-ajv8";
import Form from "@rjsf/core";
import { Box } from "@mantine/core";

import TextInputWidget from "../TextInputWidget/TextInputWidget"
import ObjectFieldTemplate from "./ObjectFormTemplate";

const ContactForm = () => {

    const widgets: RegistryWidgetsType = {
        textInputWidget: TextInputWidget
      };
      
      const schema: RJSFSchema = {
        title: "Contact ",
        type: "object",
        description: "Please do not hesistate to reach out if you have any queries.",
        required: ["name", "email", "message"],
        properties: {
          "name": {
            type: "string",
            title: "Name",
            minLength: 3
      
          },
          "email": {
            type: "string",
            title: "E-mail",
         
          },
          "message": {
            type: "string",
            title: "Message",
            minLength: 30
            
          }
        }
      }
    
      const uiSchema: UiSchema = {
        "name": {
         "ui:widget": "textInputWidget",
        },
        "email": {
          "ui:widget": "textInputWidget",
        },
        "message": {
            "ui:widget": "textInputWidget",
            },
        
      }
    
    return (
        <Box className=" font-bold border rounded-xl  py-7 px-10">
            <Form schema={schema}
            uiSchema={uiSchema}
            validator={validator}
            widgets={widgets}
            templates={{ ObjectFieldTemplate }} 
            
            />
        </Box>
    )
  };

export default ContactForm;