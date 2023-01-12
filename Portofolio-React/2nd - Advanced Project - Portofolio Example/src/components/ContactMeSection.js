import React, { useEffect } from "react";
import { useFormik } from "formik";
import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  Select,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import * as Yup from 'yup';
import FullScreenSection from "./FullScreenSection";
import useSubmit from "../hooks/useSubmit";
import {useAlertContext} from "../context/alertContext";



const LandingSection = () => {
  const {isLoading, response, submit} = useSubmit();
  const { onOpen } = useAlertContext();
  
  const [prevResponse,setPrevResponse] = React.useState(response);

  const formik = useFormik({
    initialValues: {
      firstName: "",
      email: "",
      type: "Freelance project proposal",
      comment:""
    },
    onSubmit: (values) => {
      submit("",values);
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
                .label('firstName')
                .required(),
      email: Yup.string()
              .email()
              .required(),
      type: Yup.string(),
      comment: Yup.string()
                .required()
                .min(25,"The minimum length should be 25 characters")  
    }),
  });
  useEffect(() => {
    if(response !== prevResponse) {
        if(response.type === 'success') {
          formik.resetForm();
        }
        setPrevResponse(response);
        onOpen(response.type,response.message);
    }
  },[response,onOpen,prevResponse,formik]);
  
  return (
    <FullScreenSection
      isDarkBackground
      backgroundColor="#512DA8"
      py={16}
      spacing={8}
    >
      <VStack minWidth="80vw" maxWidth="1024px" p={32} alignItems="flex-start">
        <Heading as="h1" id="contactme-section">
          Contact me
        </Heading>
        <Box p={6} rounded="md" w="100%">
          <form onSubmit={formik.handleSubmit}>
            <VStack spacing={4}>
              <FormControl isInvalid={formik.touched.firstName && formik.errors.firstName}>
                <FormLabel htmlFor="firstName">Name</FormLabel>
                <Input
                  id="firstName"
                  name="firstName"
                  value = {formik.values.firstName}
                  onChange={formik.handleChange}
                />
                <FormErrorMessage>Required</FormErrorMessage>
              </FormControl>
              <FormControl isInvalid={formik.touched.email && formik.errors.email}>
                <FormLabel htmlFor="email">Email Address</FormLabel>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  onChange={formik.handleChange}
                  value={formik.values.email}
                />
                <FormErrorMessage>Required</FormErrorMessage>
              </FormControl>
              <FormControl>
                <FormLabel htmlFor="type">Type of enquiry</FormLabel>
                <Select id="type" name="type" onChange={formik.handleChange} value={formik.values.type}>
                  <option value="hireMe">Freelance project proposal</option>
                  <option value="openSource">Open source consultancy session</option>
                  <option value="other">Other</option>
                </Select>
              </FormControl>
              <FormControl isInvalid={formik.touched.comment && formik.errors.comment && (formik.values.comment.length < 25)}>
                <FormLabel htmlFor="comment">Your message</FormLabel>
                <Textarea
                  id="comment"
                  name="comment"
                  height={100}
                  onChange={formik.handleChange}
                  value={formik.values.comment}
                />
                <FormErrorMessage>Required. The minimum length of your comment should be 25 characters.</FormErrorMessage>
              </FormControl>
              <Button type="submit" colorScheme="purple" width="full">
                {isLoading? <p>Loading....</p> : <p>Submit</p>} 
              </Button>
            </VStack>
          </form>
        </Box>
      </VStack>
    </FullScreenSection>
  );
};

export default LandingSection;

