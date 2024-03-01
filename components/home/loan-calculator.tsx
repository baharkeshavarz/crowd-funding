"use client"

import { Button, Input, Typography } from "@material-tailwind/react"
import React from "react"
import LayoutWrapper from "../layout/layout-wrapper"

const LoanCalculator = () => {
  return (
    <div className="background-light850_dark100">
      <LayoutWrapper>
        <div className="grid w-full grid-cols-1 gap-10 py-10 sm:grid-cols-2">
          <div className="flex-center flex-col rounded-md border border-light-800 bg-light-900">
            <div className="flex flex-col items-center space-x-1 p-4 sm:flex-row">
              <div className="w-full px-1 text-center sm:w-16">
                <Typography className="h4-semibold">Amount</Typography>
              </div>
              <div className="flex-center flex-1 space-x-2">
                <Button
                  variant="filled"
                  className="flex-center h-10 bg-light-800"
                >
                  <span className="h4-semibold text-dark100_light900">+</span>
                </Button>
                <Input
                  placeholder="10000"
                  value="1500"
                  className="focus:!border-light-800"
                  labelProps={{
                    className: "before:content-none after:content-none"
                  }}
                />
                <Button
                  variant="filled"
                  className="flex-center h-10 bg-light-800"
                >
                  <span className="text-dark100_light900 text-xl">-</span>
                </Button>
              </div>
            </div>
            <div className="flex flex-col items-center space-x-1 p-4 sm:flex-row">
              <div className="w-full px-1 text-center sm:w-16">
                <Typography className="h4-semibold">Term</Typography>
              </div>
              <div className="flex-center flex-1 space-x-2">
                <Button
                  variant="filled"
                  className="flex-center h-10 bg-light-800"
                >
                  <span className="h4-semibold text-dark100_light900">+</span>
                </Button>
                <Input
                  placeholder="10000"
                  value="12"
                  className="focus:!border-light-800"
                  labelProps={{
                    className: "before:content-none after:content-none"
                  }}
                />
                <Button
                  variant="filled"
                  className="flex-center h-10 bg-light-800"
                >
                  <span className="text-dark100_light900 text-xl">-</span>
                </Button>
              </div>
            </div>
          </div>
          <div className="flex-center rounded-md border border-light-800 bg-light-900 p-5">
            <div className="grid-cols-col grid w-full gap-5 sm:grid-cols-2">
              <div className="flex-center flex-col rounded-md border-2 border-light-700 p-2">
                <Typography className="text-light400_light500">
                  Monthly repayment
                </Typography>
                <Typography className="h3-bold py-2.5 text-secondary-500">
                  £543.21
                </Typography>
                <Typography className="text-light400_light500">
                  The same every month
                </Typography>
              </div>
              <div className="flex-center flex-col rounded-md border-2 border-light-700 p-2">
                <Typography className="text-light400_light500">
                  Total amount payable
                </Typography>
                <Typography className="h3-bold py-2.5 text-secondary-500">
                  £13,037.04
                </Typography>
                <Typography className="text-light400_light500">
                  Loan required
                </Typography>
              </div>
              <div className="flex-center flex-col rounded-md border-2 border-light-700 p-2">
                <Typography className="text-light400_light500">APR</Typography>
                <Typography className="h3-bold py-2.5 text-secondary-500">
                  5.8%
                </Typography>
                <Typography className="text-light400_light500 text-center">
                  Based on the details you entered
                </Typography>
              </div>
            </div>
          </div>
        </div>
      </LayoutWrapper>
    </div>
  )
}

export default LoanCalculator
