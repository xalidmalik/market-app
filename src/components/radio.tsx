import { Box } from "@chakra-ui/layout";
import { useRadio } from "@chakra-ui/radio";
import { Svg } from "assets/svgs";

export const Radio = (props: any) => {
  const {
    getInputProps,
    getCheckboxProps,
    state: { isChecked },
  } = useRadio(props);

  const input = getInputProps();
  const checkbox = getCheckboxProps();

  return (
    <Box
      as="label"
      display="flex"
      gridGap="3"
      alignItems="center"
      fontSize="14px"
      color="gray.600"
    >
      <input {...input} />
      <Box
        {...checkbox}
        cursor="pointer"
        borderWidth="2px"
        borderRadius="full"
        boxShadow="md"
        width="5.5"
        height="5.5"
        display="flex"
        justifyContent="center"
        alignItems="center"
        _checked={{
          bg: "white",
          color: "white",
          borderColor: "cyan.500",
        }}
        _focus={{
          boxShadow: "outline",
        }}
      >
        {isChecked && <Svg.Check />}
      </Box>
      {props.children}
    </Box>
  );
};
