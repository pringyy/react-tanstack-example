
  import { TextInput } from '@mantine/core';
  import { WidgetProps } from "@rjsf/utils";
  
  const TextInputWidget = (props: WidgetProps) => {
    return (
      <TextInput type="text"
        className="custom"
        value={props.value}
        required={props.required}
        onChange={(event) => props.onChange(event.target.value)} />
    );
  };

export default TextInputWidget;