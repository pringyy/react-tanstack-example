import {ObjectFieldTemplateProps} from "@rjsf/utils";
import {Text, Box} from "@mantine/core"

const ObjectFieldTemplate = (props: ObjectFieldTemplateProps) => {

    return (
        <>
            <Text className="text-3xl font-bold underline" fz="xl">{props.title}</Text>
            <Text>{props.description}</Text>
            {props.properties.map(element => <>{element.content}</>)}
        </>
    );
}

export default ObjectFieldTemplate;
  