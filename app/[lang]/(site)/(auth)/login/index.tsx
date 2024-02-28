"use client"

import TextInput from "@/components/forms/input";
import LayoutWrapper from "@/components/layout/layout-wrapper";
import { findLocalFromUrl } from "@/lib/url";
import { TranslateProps } from "@/types";
import { LockClosedIcon, UserCircleIcon } from "@heroicons/react/24/solid";
import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Input,
  Checkbox,
  Button,
} from "@material-tailwind/react";
import { usePathname } from "next/navigation";
 
const Login = ({ t }: TranslateProps) =>{
  const pathname= usePathname();
  const lang = findLocalFromUrl(pathname);
  
  return (
    <LayoutWrapper>
      <Card className="sm:w-96 w-full my-10 py-5 rounded-none sm:mx-0 mx-5">
        <CardBody className="flex flex-col gap-2">
        <Typography variant="paragraph" className="text-light400_light500">
             {t.login.username}
          </Typography>
          <TextInput icon={<UserCircleIcon/>} />
          <Typography variant="paragraph" className="text-light400_light500 mt-2">
             {t.login.password} 
          </Typography>
          <TextInput icon={<LockClosedIcon/>} />
          <div className="-ml-2.5">
            <Checkbox label={t.login.rememberMe} />
          </div>
        </CardBody>
        <CardFooter className="pt-0">
          <Button variant="filled" fullWidth className="bg-primary-500">
            {t.general.login}
          </Button>
          <Typography variant="small" className="mt-6 flex justify-center text-light400_light500">
             {t.login.dontHaveAccount}
            <Typography
              as="a"
              href={`/${lang}/signup`}
              variant="small"
              color="blue-gray"
              className="ml-1 text-dark400_light800"
            >
           {t.general.register}
            </Typography>
          </Typography>
        </CardFooter>
      </Card>
    </LayoutWrapper>
  );
}

export default Login;