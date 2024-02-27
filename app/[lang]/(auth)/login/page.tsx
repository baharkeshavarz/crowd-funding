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
 
const Login = () =>{
  const pathname= usePathname();
  const lang = findLocalFromUrl(pathname);
  
  return (
    <LayoutWrapper>
      <Card className="w-96 my-10 rounded-none">
        {/* <CardHeader
          variant="filled"
          className="mb-4 grid h-20 place-items-center bg-purple-500 rounded-md"
        >
          <Typography variant="h3" color="white">
            Sign In
          </Typography>
        </CardHeader> */}
        <CardBody className="flex flex-col gap-4">
          <Input label="Email" size="lg" />
          <Input label="Password" size="lg" />
          <div className="-ml-2.5">
            <Checkbox label="Remember Me" />
          </div>
        </CardBody>
        <CardFooter className="pt-0">
          <Button variant="filled" fullWidth className="bg-primary-500">
            Sign In
          </Button>
          <Typography variant="small" className="mt-6 flex justify-center text-light400_light500">
            Don&apos;t have an account?
            <Typography
              as="a"
              href={`/${lang}/signup`}
              variant="small"
              color="blue-gray"
              className="ml-1 text-dark400_light800"
            >
              Sign up
            </Typography>
          </Typography>
        </CardFooter>
      </Card>
    </LayoutWrapper>
  );
}

export default Login;