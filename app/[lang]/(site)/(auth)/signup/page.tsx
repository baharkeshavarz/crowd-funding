"use client"

import LayoutWrapper from "@/components/layout/layout-wrapper";
import { findLocalFromUrl } from "@/lib/url";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Input,
  Checkbox,
  Button,
} from "@material-tailwind/react";
import { usePathname } from "next/navigation";
 
const SignUp = () =>{
  const pathname= usePathname();
  const lang = findLocalFromUrl(pathname);
  return (
    <LayoutWrapper>
      <Card className="sm:w-96 w-full my-10 py-5 rounded-none sm:mx-0 mx-5">
        {/* <CardHeader
          variant="filled"
          className="mb-4 grid h-20 place-items-center bg-purple-500 rounded-md"
        >
          <Typography variant="h3" color="white">
            Sign Up
          </Typography>
        </CardHeader> */}
        <CardBody className="flex flex-col gap-4">
          <Input label="Email" size="lg" />
          <Input label="Password" size="lg" />
        </CardBody>
        <CardFooter className="pt-0">
          <Button variant="filled" fullWidth className="bg-primary-500">
            Register
          </Button>
          {/* <Typography variant="small" className="mt-6 text-justify text-light400_light500">
            Your personal data will be used to support your experience throughout this website, to manage access to your account, and for 
            other purposes described in our
            <Link
              href={`/${lang}/login`}
              className="ml-1 text-dark400_light800"
            >
             privacy policy
            </Link>
          </Typography> */}
          <Typography variant="small" className="mt-6 flex justify-center text-light400_light500">
            Do you have an account?
            <Typography
              as="a"
              href={`/${lang}/login`}
              variant="small"
              color="blue-gray"
              className="ml-1 text-dark400_light800"
            >
              Log In
            </Typography>
          </Typography>
        </CardFooter>
      </Card>
    </LayoutWrapper>
  );
}

export default SignUp;