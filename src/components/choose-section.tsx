"use client";
import { Card, CardBody } from "@heroui/card";

export default function ChooseSection() {
  return (
    <div className='w-full grid grid-cols-1 md:grid-cols-4 gap-4 px-6'>
      <div className='md:col-span-4 text-center mb-10'>
        <h1 className='text-4xl font-cal-sans'>Why Choose Us?</h1>
      </div>
      <Card shadow='none' className='p-6 bg-surface-container'>
        <CardBody className='grid grid-cols-1 gap-10'>
          <div className='w-16 h-16 bg-surface-container-high rounded-2xl flex items-center justify-center'>
            <p className='text-primary text-3xl'>#1</p>
          </div>
          <div>
            <h3 className='text-2xl font-semibold'>
              Tailored Solutions for Your Business
            </h3>
            <p className='text-primary'>
              We don’t offer one-size-fits-all apps. Every solution is
              custom-built to align with your business goals, workflows, and
              users' needs.
            </p>
          </div>
        </CardBody>
      </Card>
      <Card shadow='none' className='p-6 bg-surface-container'>
        <CardBody className='grid grid-cols-1 gap-10'>
          <div className='w-16 h-16 bg-surface-container-high rounded-2xl flex items-center justify-center'>
            <p className='text-primary text-3xl'>#2</p>
          </div>
          <div>
            <h3 className='text-2xl font-semibold'>End-to-End Service</h3>
            <p className='text-primary'>
              From UI/UX design to backend development, deployment, and
              maintenance — we handle every stage of your app lifecycle with
              care and expertise.
            </p>
          </div>
        </CardBody>
      </Card>
      <Card shadow='none' className='p-6 bg-surface-container'>
        <CardBody className='grid grid-cols-1 gap-10'>
          <div className='w-16 h-16 bg-surface-container-high rounded-2xl flex items-center justify-center'>
            <p className='text-primary text-3xl'>#3</p>
          </div>
          <div>
            <h3 className='text-2xl font-semibold'>
              Scalable & Future-Ready Architecture
            </h3>
            <p className='text-primary'>
              Our applications are built with modern architecture and clean
              code, ensuring your system can grow as your business expands.
            </p>
          </div>
        </CardBody>
      </Card>
      <Card shadow='none' className='p-6 bg-surface-container'>
        <CardBody className='grid grid-cols-1 gap-10'>
          <div className='w-16 h-16 bg-surface-container-high rounded-2xl flex items-center justify-center'>
            <p className=' text-primary text-3xl'>#4</p>
          </div>
          <div>
            <h3 className='text-2xl font-semibold text-primary'>
              Fast, Secure, and Reliable
            </h3>
            <p className='text-primary'>
              We use the latest frameworks and best practices to ensure your app
              performs smoothly, loads fast, and stays protected.
            </p>
          </div>
        </CardBody>
      </Card>
    </div>
  );
}
